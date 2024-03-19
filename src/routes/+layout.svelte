<script lang="ts">
	import '../app.pcss';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'iconify-icon';
	import { page } from '$app/stores';
</script>

<main class="flex flex-col min-h-screen text-white dark bg-background">
	<NavBar />
	<div id="content" class="flex flex-col justify-between flex-1 overflow-y-auto">
		<slot />
		{#if $page.url.pathname !== '/'}
			<Footer />
		{/if}
	</div>
</main>

<style>
	:global(h1) {
		@apply text-6xl font-bold;
	}

	:global(h2) {
		@apply text-4xl font-semibold;
	}

	:global(h3) {
		@apply text-2xl font-light;
	}
</style>
