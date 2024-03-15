<script lang="ts">
	import { onMount } from 'svelte';
	import Placeholder from '$lib/Placeholder.svelte';

	let svxComponent: any;
	let faultyPath: string;

	onMount(async () => await loadSVX(name));

	async function loadSVX(name: string) {
		try {
			// Dynamic import restrictions restrict the use of variables in the import statement,
			// hence we can't re-use the path for faultyPath
			svxComponent = (await import(`./svx/${name}.svx`)).default;
		} catch (e: any) {
			svxComponent = null;
			faultyPath = `./svx/${name}.svx`;
		}
	}

	export let name = '';
</script>

{#if svxComponent !== null}
	<svelte:component this={svxComponent}></svelte:component>
{:else}
	<Placeholder path={faultyPath} />
{/if}
