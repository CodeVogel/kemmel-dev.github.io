<script lang="ts">
	import { onMount } from 'svelte';
	import TypeWriter from './TypeWriter.svelte';

	let contentHeight = 0;
	let wrapper: HTMLDivElement;

	onMount(() => {
		contentHeight = wrapper.scrollHeight;
	});

	function updateHeight(event: any) {
		contentHeight = wrapper.scrollHeight;
	}

	let className = '';
	export { className as class };
	export let msDelayBetweenElements = 5000,
		msDelayBetweenChars = 150;
</script>

<div
	bind:this={wrapper}
	class="{className} overflow-hidden rounded-md transition-height"
	style="height: {contentHeight}px; transition-duration: {200}ms;"
>
	<TypeWriter on:elementAdded={updateHeight} {msDelayBetweenChars} {msDelayBetweenElements}>
		<slot />
	</TypeWriter>
</div>
