<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/components/ui/navigation/NavBar.svelte';
	import '../app.css';
	import 'iconify-icon';
</script>

<main class="flex flex-col text-white background-gradient">
	<NavBar class="h-[6rem] fixed background-gradient" />
	<div class="min-h-[calc(100dvh-6rem-6rem)] mt-[6rem]">
		<slot />
	</div>
	{#if $page.url.pathname !== '/'}
		<footer class="min-h-[6rem]">Footer.</footer>
	{/if}
</main>

<style>
	:global(body, main) {
		@apply min-h-[100vh];
	}
</style>
