<script lang="ts">
	import { onMount } from 'svelte';
	import { loadSvx } from '$lib/loadSvx';

	let data: any;

	onMount(async () => {
		data = await loadSvx('about');
	});
</script>

This is a page.
{#if data}
	<svelte:component this={data.content} />
{/if}
