<script lang="ts">
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
	import 'iconify-icon';
</script>

<main
	class="flex flex-col text-white bg-fixed bg-gradient-to-b from-black via-70% via-black to-[#222222]"
>
	<NavBar
		class="h-[6rem] fixed  bg-gradient-to-b from-black via-40% via-black to-[#222222] bg-fixed"
	/>
	<div class="min-h-[calc(100dvh-6rem-6rem)] mt-[6rem]">
		<slot />
	</div>
	{#if $page.url.pathname !== '/'}
		<footer class="min-h-[6rem]">Footer.</footer>
	{/if}
</main>

<style>
	:global(html) {
		@apply bg-gradient-to-b from-red-500 to-red-900 bg-fixed;
	}

	:global(body, main) {
		@apply min-h-[100vh];
	}
</style>
