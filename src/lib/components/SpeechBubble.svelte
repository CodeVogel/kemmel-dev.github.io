<script lang="ts">
	import { onMount } from 'svelte';
	import TypeWriter from './TypeWriter.svelte';

	let contentHeight = 24;

	onMount(() => {
		contentHeight = 24;
	});

	function updateHeight() {
		const speechBubble = document.getElementById('wrapper');
		// Get height of the element inside the speech bubble
		const height = speechBubble.scrollHeight;
		// Set the height of the speech bubble to the height of the element inside
		contentHeight = height;
	}
</script>

<div class="flex justify-center mt-24">
	<div
		id="wrapper"
		class="w-full overflow-hidden duration-500 rounded-md transition-height bg-slate-400"
		style="height: {contentHeight}px;"
	>
		<TypeWriter on:elementAdded={updateHeight}>
			<div>Hallo <b>lieve</b></div>
			<div class="bg-red-600">Wereld.</div>
			Test.
		</TypeWriter>
	</div>
</div>
