<script lang="ts">
	import { page } from '$app/stores';
	import SvxContainer from '$lib/components/svx/SvxContainer.svelte';
	import SvxRenderer from '$lib/components/svx/SvxRenderer.svelte';
	import { fade } from 'svelte/transition';

	let frontMatter: any = null;
	let contentVisible: boolean = false;
</script>

<SvxContainer>
	{#if frontMatter !== null && contentVisible}
		<h1 transition:fade>{frontMatter.title}</h1>
	{/if}
	<SvxRenderer slug={$page.params.slug} bind:frontMatter bind:contentVisible />
</SvxContainer>
