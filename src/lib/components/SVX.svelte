<script lang="ts">
	import { onMount } from 'svelte';
	import Placeholder from '$lib/components/Placeholder.svelte';

	let svxComponent: any;
	let faultyPath: string;

	onMount(async () => await loadSVX(name));

	async function loadSVX(name: string) {
		try {
			// Dynamic import restrictions restrict the use of variables in the import statement,
			// hence we can't re-use the path for faultyPath
			svxComponent = (await import(`../svx/${name}.svx`)).default;
		} catch (e: any) {
			svxComponent = null;
			faultyPath = `../svx/${name}.svx`;
		}
	}

	export let name = '',
		centerX = false,
		centerY = false,
		grow = false,
		options = '';
</script>

{#if svxComponent !== null}
	<div
		class="svx
		{grow ? 'flex-grow h-full' : ''} 
		{options.length !== 0 ? options : ''} 
		{centerX ? 'svx-center-x' : ''} 
		{centerY ? 'svx-center-y' : ''}
		"
	>
		<svelte:component this={svxComponent}></svelte:component>
	</div>
{:else}
	<Placeholder path={faultyPath} />
{/if}

<style>
	.svx {
		@apply flex flex-col;
	}

	.svx-center-x {
		@apply items-center;
	}

	.svx-center-y {
		@apply justify-center;
	}

	:global(.svx > h1) {
		@apply text-6xl font-bold;
	}

	:global(.svx > h2) {
		@apply text-4xl font-semibold;
	}

	:global(.svx table) {
		@apply border-separate border-spacing-x-8;
	}

	:global(.svx table td),
	:global(.svx table th) {
		@apply align-top text-left;
	}
</style>
