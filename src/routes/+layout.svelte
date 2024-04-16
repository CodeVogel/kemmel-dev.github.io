<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/ui/footer/Footer.svelte';
	import NavBar from '$lib/components/ui/navigation/NavBar.svelte';
	import '../app.css';
	import 'iconify-icon';
	import WaveBorder from '$lib/components/ui/polish/WaveBorder.svelte';
</script>

<main class="flex flex-col font-sans text-white overflow-x-clip">
	<NavBar class="h-[6rem] fixed bg-background-800 z-50" />
	<WaveBorder
		flipY={false}
		class="mt-[6rem] fixed h-[4rem] bg-gradient-to-b from-background-800 to-background-400 border-b-[1px] border-accent/50 shadow-2xl shadow-black/50 z-50"
	/>
	<div class="flex flex-col flex-grow mt-[10rem]">
		<slot />
	</div>
	{#if $page.url.pathname !== '/'}
		<Footer class="min-h-[6rem]" />
	{:else}
		<WaveBorder flipY={true} class="h-[4rem] " />
	{/if}
</main>

<style>
	:global(html) {
		@apply bg-background-900;
	}

	:global(body) {
		background-image: url('/tile2.png');
	}

	:global(body, main) {
		@apply min-h-[100vh];
		background-position: center;
	}
</style>
