<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let msDelayBetweenElements = 500;
	let msDelayBetweenChars = 150;
	let dataCleared = false;
	let root: HTMLDivElement;
	let clone: HTMLDivElement;
	let className = '';
	let styleName = '';

	onMount(() => {
		clone = root.cloneNode(true) as HTMLDivElement;
		clearData();
		addContentWithDelay(clone, root);
	});

	// Clear the data in the root element (after the clone has been created)
	function clearData() {
		while (root.firstChild) {
			root.removeChild(root.firstChild);
		}
		dataCleared = true;
	}

	// Add the content of the clone to the root element with a delay
	async function addContentWithDelay(clonedElement: HTMLElement, targetElement: HTMLElement) {
		for (const clonedChild of clonedElement.childNodes) {
			await addNodeWithDelay(clonedChild, targetElement);
		}
	}

	// Add an element from source to target with a delay
	async function addNodeWithDelay(sourceNode: Node, targetElement: HTMLElement) {
		if (sourceNode instanceof HTMLElement) {
			// When dealing with an HTML element, it may have children,
			// so we need to create a new empty element, copy the attributes
			// of the original element, and then recursively handle potential children
			// to finish this branch of the tree
			const newNode = document.createElement(sourceNode.tagName);
			copyAttributes(sourceNode, newNode);
			targetElement.appendChild(newNode);

			newNode.innerHTML += '.';
			// Dispatch 'elementAdded' event
			dispatch('elementAdded');
			newNode.innerHTML = newNode.innerHTML.slice(0, -1);

			await delay(msDelayBetweenElements);
			await addContentWithDelay(sourceNode, newNode);
		} else if (sourceNode instanceof Text) {
			// When dealing with a text node, we can simply add it to the target element
			// one character at a time.
			if (sourceNode.textContent!.trim().length > 0) {
				await addTextElementPerCharacterWithDelay(sourceNode, targetElement);
			}
		}
	}

	// Add a text node to the target element, then adds one character at a time with a delay
	async function addTextElementPerCharacterWithDelay(textNode: Text, target: HTMLElement) {
		const text = textNode.textContent || '';
		const textElement = document.createTextNode('');
		target.appendChild(textElement);

		textElement.textContent += '.';
		// Dispatch 'elementAdded' event
		dispatch('elementAdded');
		textElement.textContent = textElement.textContent!.slice(0, -1);

		await delay(msDelayBetweenElements);
		// Remove the last 5 characters from target.innerHTML
		for (const char of text) {
			textElement.textContent += char;
			await delay(msDelayBetweenChars);
		}
	}

	// Copy the attributes from one element to another
	function copyAttributes(source: HTMLElement, target: HTMLElement) {
		Array.from(source.attributes).forEach((attr) => {
			target.setAttribute(attr.name, attr.value);
		});
	}

	// Waits for a certain amount of time
	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	export { className as class };
	export { styleName as style };
</script>

<!-- To prevent the slotted content from appearing before onMount removes it's contents, 
	 it starts with display:none. -->
<div
	id="typewriter-content"
	class={className}
	bind:this={root}
	style={dataCleared ? '' : 'display:none;' + styleName}
>
	<slot />
</div>
