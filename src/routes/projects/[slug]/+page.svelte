<script lang="ts">
	import { page } from '$app/stores';
	import SvxRenderer from '$lib/components/svx/SvxRenderer.svelte';
	import { fade } from 'svelte/transition';

	let frontMatter: any = null;
	let contentVisible: boolean = false;
</script>

<div class="grid justify-center grid-rows-1">
	<div class="flex flex-col items-start max-w-[64ch]">
		{#if frontMatter !== null && contentVisible}
			<h1 transition:fade>{frontMatter.title}</h1>
		{/if}
		<SvxRenderer slug={$page.params.slug} bind:frontMatter bind:contentVisible />
	</div>
</div>

<style>
	:global(.post-container .toc::before) {
		content: 'Table of Contents';
		@apply text-xl font-semibold;
	}

	:global(.post-container .shiki) {
		@apply overflow-x-scroll;
	}

	:global(.post-container code) {
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
