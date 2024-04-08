<script lang="ts">
	import SvxContainer from '$lib/components/svx/SvxContainer.svelte';
	import Spinner from '$lib/components/ui/polish/spinner/Spinner.svelte';
	import { loadSvx } from '$lib/loadSvx';
	import { fade } from 'svelte/transition';

	export let slug: string;
	let contentVisible = false;
</script>

{#await loadSvx(slug, 2000)}
	<div
		class="grid justify-center grid-rows-1 m-8"
		transition:fade
		on:outroend={() => (contentVisible = true)}
	>
		<Spinner />
	</div>
{:then svx}
	{#if contentVisible}
		<div transition:fade>
			<SvxContainer>
				<h1>{svx.meta.title}</h1>
				<svelte:component this={svx.content} />
			</SvxContainer>
		</div>
	{/if}
{/await}
