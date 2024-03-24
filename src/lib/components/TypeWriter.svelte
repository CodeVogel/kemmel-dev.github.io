<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let element;
	let allElements;

	onMount(() => {
		element = document.querySelector('#typewriter-content');

		if (element) {
			element.innerHTML = '';
			console.log(element.innerHTML);
		}

		let parser = new DOMParser();
		const doc = parser
			.parseFromString(
				'<h1>Hello</h1><h2>World</h2><div>This is</div><div>some text yo.</div>',
				'text/html'
			)
			.querySelector('body');
		allElements = findAllElements(doc);
		addToElement(element, allElements);
	});

	async function addToElement(currentElement, allElements) {
		if (currentElement) {
			for (let i = 0; i < allElements.length; i++) {
				let newElement = document.createElement(allElements[i][0]);
				currentElement.appendChild(newElement);
				if (Array.isArray(allElements[i][1])) {
					await addToElement(newElement, allElements[i][1]);
				} else {
					await typeText(newElement, allElements[i][1]);
				}
				// Add a delay here
				dispatch('change');
				await new Promise((r) => setTimeout(r, 250));
			}
		}
	}

	async function typeText(element, text) {
		for (let i = 0; i < text.length; i++) {
			if (i == 0) {
				element.innerHTML += '<br>';
				dispatch('change');
				await new Promise((r) => setTimeout(r, 500));
				element.innerHTML = element.innerHTML.slice(0, -4);
			}
			element.innerHTML += text[i];

			// Add a delay here
			await new Promise((r) => setTimeout(r, 50));
		}
	}

	function findAllElements(doc) {
		let elements = [];
		let child = doc.firstElementChild;
		if (child) {
			elements.push([child.tagName, findAllElements(child)]);
			while (child.nextElementSibling != null) {
				child = child.nextElementSibling;
				elements.push([child.tagName, findAllElements(child)]);
			}
			return elements;
		}
		return doc.innerHTML;
	}
</script>
