<script lang="ts">
	import { loadSvx } from '$lib/loadSvx';
	import { fade } from 'svelte/transition';
	import Spinner from '$lib/components/ui/polish/spinner/Spinner.svelte';
	import ErrorRenderer from './ErrorRenderer.svelte';

	export let contentVisible: boolean;
	export let slug: string;
	export let frontMatter: any;

	const promise = loadSvx(slug).then((result) => {
		frontMatter = result.meta;
		return result;
	});
</script>

{#await promise}
	<div
		transition:fade
		on:outroend={() => {
			contentVisible = true;
		}}
	>
		<Spinner></Spinner>
	</div>
{:then svx}
	{#if contentVisible}
		<div class="post-container" transition:fade>
			<svelte:component this={svx.content} />
		</div>
	{/if}
{:catch error}
	{#if contentVisible}
		<div transition:fade>
			<ErrorRenderer {error} />
		</div>
	{/if}
{/await}
