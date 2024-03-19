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
		background = 'bg-none';
</script>

{#if svxComponent !== null}
	<div class="svx {background} {centerX ? 'svx-center-x' : ''} {centerY ? 'svx-center-y' : ''}">
		<svelte:component this={svxComponent} class="svx"></svelte:component>
	</div>
{:else}
	<Placeholder path={faultyPath} />
{/if}

<style>
	.svx {
		@apply flex flex-col flex-grow;
	}

	.svx-center-x {
		@apply items-center;
	}

	.svx-center-y {
		@apply justify-center;
	}

	:global(.svx > h1) {
		@apply text-4xl;
	}

	:global(.svx > h2) {
		@apply text-3xl;
	}

	:global(.svx > h2) {
		@apply text-2xl;
	}
</style>
