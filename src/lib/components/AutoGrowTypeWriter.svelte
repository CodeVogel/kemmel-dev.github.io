<script lang="ts">
	import TypeWriter from './TypeWriter.svelte';

	let contentHeight = 0;
	let wrapper: HTMLDivElement;

	function updateHeight() {
		contentHeight = wrapper.scrollHeight;
	}

	let className = '';
	export { className as class };
	export let msDelayBetweenElements = 500,
		msDelayBetweenChars = 150;
</script>

<div
	bind:this={wrapper}
	class="{className} overflow-hidden rounded-md transition-height"
	style="height: {contentHeight}px; transition-duration: {msDelayBetweenElements}ms;"
>
	<TypeWriter on:elementAdded={updateHeight} {msDelayBetweenChars} {msDelayBetweenElements}>
		<slot />
	</TypeWriter>
</div>
