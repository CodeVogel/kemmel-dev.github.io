<script lang="ts">
	import TypeWriter from '$lib/components/typewriter/TypeWriter.svelte';

	let contentHeight = 0;
	let wrapper: HTMLDivElement;

	function updateHeight() {
		// If wrapper is within 2 px of the content height, ignore it
		if (Math.abs(wrapper.scrollHeight - contentHeight) < 2) return;
		contentHeight = wrapper.scrollHeight;
	}

	let className = '';
	export { className as class };
	export let msDelayBetweenElements = 5000,
		msDelayBetweenChars = 150,
		msDelayHeightTransition = 300,
		preRender = false;
</script>

<div
	bind:this={wrapper}
	class="{className} overflow-hidden rounded-md transition-height"
	style="{preRender
		? ''
		: 'height: {contentHeight}px;'} transition-duration: {msDelayHeightTransition}ms;"
>
	<TypeWriter
		on:elementAdded={updateHeight}
		{preRender}
		{msDelayBetweenChars}
		{msDelayBetweenElements}
	>
		<slot />
	</TypeWriter>
</div>
