<script lang="ts">
	import { onMount } from 'svelte';
	import TypeWriter from './TypeWriter.svelte';

	let contentHeight = 0;

	function updateHeight() {
		console.log('updateHeight');
		contentHeight = document.querySelector('#wrapper').scrollHeight;
	}
</script>

<div class="flex justify-center mt-24">
	<div
		id="wrapper"
		class="w-full p-8 m-8 overflow-hidden duration-500 rounded-md transition-height bg-slate-400"
		style="height: {contentHeight}px;"
	>
		<TypeWriter on:elementAdded={updateHeight}>
			<h1>Hallootjes</h1>
			<div class="p-8 bg-red-400 rounded-lg w-fit">Wereld.</div>
		</TypeWriter>
	</div>
</div>
