<script lang="ts">
	import { serialize } from 'cookie';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/ui/navigation/NavBar.svelte';
	import '../app.css';
	import 'iconify-icon';
	import WaveBorder from '$lib/components/WaveBorder.svelte';
	import KUTE from 'kute.js';
	import { onMount } from 'svelte';
</script>

<main class="flex flex-col text-white background-gradient overflow-x-clip">
	<NavBar class="h-[6rem] fixed background-gradient" />
	<WaveBorder />
	<div class="min-h-[calc(100dvh-10rem-6rem)] mt-[10rem]">
		<slot />
	</div>
	{#if $page.url.pathname !== '/'}
		<Footer class="min-h-[6rem]" />
	{/if}
</main>

<style>
	:global(body, main) {
		@apply min-h-[100vh];
	}
</style>
