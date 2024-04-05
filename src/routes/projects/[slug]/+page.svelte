<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { loadSvx } from '$lib/loadSvx';

	onMount(async () => {
		data = await loadSvx($page.params.slug);
	});

	let data: any;
</script>

<div class="flex justify-center w-full px-6 py-4">
	<div class="flex flex-col max-w-[64ch] w-full">
		<div id="post-container" style="--start: 0">
			{#if data}
				<svelte:component this={data.content} />
			{/if}
		</div>
	</div>
</div>

<style>
	:global(#post-container .toc::before) {
		content: 'Table of Contents';
		@apply text-xl font-semibold;
	}

	:global(#post-container .shiki) {
		@apply overflow-x-scroll;
	}

	:global(#post-container code) {
		counter-reset: step;
		counter-increment: step calc(var(--start, 1) - 1);
	}

	:global(#post-container code .line::before) {
		content: counter(step);
		counter-increment: step;
		width: 1rem;
		margin-right: 1.5rem;
		display: inline-block;
		text-align: right;
		color: rgba(115, 138, 148, 0.4);
	}
</style>
