<script lang="ts">
	import SvxContainer from '$lib/components/svx/SvxContainer.svelte';
	import SvxRenderer from '$lib/components/svx/SvxRenderer.svelte';
	import { fade } from 'svelte/transition';

	let frontMatter: any = null;
	let contentVisible = false;
</script>

<SvxContainer>
	{#if frontMatter !== null && contentVisible}
		<h1 transition:fade>{frontMatter.title}</h1>
	{/if}
	<SvxRenderer slug="about" bind:frontMatter bind:contentVisible />
</SvxContainer>
