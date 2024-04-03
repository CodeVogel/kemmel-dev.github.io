<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let dataCleared = false;
	let root: HTMLElement;
	let clone: HTMLElement;
	let className = '';
	let styleName = '';

	onMount(() => {
		if (preRender) {
			root.style.display = '';
			return;
		}

		clone = root.cloneNode(true) as HTMLElement;
		clearData();
		addContentWithDelay(clone, root);
	});

	// Clear the data in the root element (after the clone has been created)
	function clearData() {
		while (root.firstChild) {
			root.removeChild(root.firstChild);
		}
		root.style.display = '';
	}

	// Waits for a certain amount of time
	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function addContentWithDelay(clone: HTMLElement, destination: HTMLElement) {
		while (clone.firstChild) {
			let clonedChild = clone.firstChild;
			const addedToRoot = destination.id === 'typewriter-content';
			switch (clonedChild.nodeType) {
				case Node.TEXT_NODE:
					let content = (clonedChild as Text).textContent?.replace(/\s+/g, ' ') || '';
					if (content.trim().length === 0) break;
					await addTextWithDelay(
						content,
						destination.appendChild(document.createTextNode('')),
						addedToRoot
					);
					break;
				case Node.ELEMENT_NODE:
					let newDestination = destination.appendChild(
						document.createElement(clonedChild.nodeName)
					);
					// Copy attributes of the cloned element to the new element
					let clonedElement = clonedChild as HTMLElement;
					for (let i = 0; i < clonedElement.attributes.length; i++) {
						let attr = clonedElement.attributes[i];
						newDestination.setAttribute(attr.name, attr.value);
					}

					newDestination.textContent += '.';
					dispatch('elementAdded');
					newDestination.textContent = newDestination.textContent.slice(0, -1);
					await addContentWithDelay(clonedChild as HTMLElement, newDestination as HTMLElement);
					break;
			}
			clone.removeChild(clonedChild);
			if (addedToRoot)
				await delay(
					clonedChild.nodeType === Node.TEXT_NODE ? msDelayBetweenChars : msDelayBetweenElements
				);
		}
	}

	async function addTextWithDelay(content: string, destination: Text, addedToRoot: boolean) {
		destination.textContent += '.';
		destination.textContent = destination.textContent.slice(0, -1);
		for (let i = 0; i < content.length; i++) {
			destination.textContent += content[i];
			await delay(msDelayBetweenChars);
			dispatch('elementAdded');
		}
	}

	export let msDelayBetweenElements = 1000,
		msDelayBetweenChars = 150,
		preRender = false;
	export { className as class };
	export { styleName as style };
</script>

<!-- To prevent the slotted content from appearing before onMount removes it's contents, 
	 it starts with display:none. -->
<div id="typewriter-content" class={className} bind:this={root} style="display:none">
	<slot />
</div>
