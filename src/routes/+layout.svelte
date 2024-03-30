<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import NavBar from '$lib/components/ui/navigation/NavBar.svelte';
	import '../app.css';
	import 'iconify-icon';
	import WaveBorder from '$lib/components/WaveBorder.svelte';
</script>

<main class="z-10 flex flex-col text-white overflow-x-clip">
	<NavBar class="h-[6rem] fixed bg-background-800" />
	<WaveBorder class="mt-[6rem] fixed h-[4rem]" />
	<div class="flex flex-col min-h-[calc(100dvh-10rem-4rem)] mt-[10rem]">
		<slot />
	</div>
	{#if $page.url.pathname !== '/'}
		<Footer class="min-h-[4rem]" />
	{/if}
	<WaveBorder flipY={true} class="fixed bottom-0 h-[4rem] " />
</main>

<style>
	:global(html, body) {
		@apply bg-background-950;
	}

	:global(body, main) {
		@apply min-h-[100vh];
	}
</style>
