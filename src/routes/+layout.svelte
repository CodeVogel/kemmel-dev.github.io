<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
	import 'iconify-icon';
</script>

<main class="flex flex-col text-foreground">
	<NavBar class="h-[6rem]" />
	<div class="mt-[6rem] h-[calc(100vh-6rem)]">
		<div class="min-h-[calc(100dvh-6rem-6rem)]">
			<slot />
		</div>
		{#if $page.url.pathname !== '/'}
			<footer class="bg-red-500 min-h-[6rem]">Footer.</footer>
		{/if}
	</div>
</main>

<style>
	:global(html) {
		@apply bg-gradient-to-b from-red-500 to-red-900 bg-fixed;
	}

	:global(body) {
		@apply min-h-[100dvh];
	}
</style>
