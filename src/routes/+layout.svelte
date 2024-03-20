<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import 'iconify-icon';
	import { page } from '$app/stores';
</script>

<main class="flex flex-col text-foreground dark bg-background h-[100vh]">
	<NavBar />
	<!-- 8rem = size of navbar height -->
	<div class="flex flex-col mt-32 h-[calc(100dvh-8rem)]">
		<div class="flex-grow bg-background">
			<slot />
		</div>
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
