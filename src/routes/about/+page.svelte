<script lang="ts">
	import SvxRenderer from '$lib/components/svx/SvxRenderer.svelte';
	import { fade } from 'svelte/transition';

	let frontMatter: any = null;
	let contentVisible = false;
</script>

<div class="grid justify-center grid-rows-1 p-8">
	<div class="flex flex-col items-center max-w-[64ch]">
		{#if frontMatter !== null && contentVisible}
			<h1 transition:fade>{frontMatter.title}</h1>
		{/if}
		<SvxRenderer slug="about" bind:frontMatter bind:contentVisible />
	</div>
</div>
