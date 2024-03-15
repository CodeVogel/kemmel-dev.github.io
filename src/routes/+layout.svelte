<script lang="ts">
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import '../app.pcss';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<ModeWatcher defaultMode={'dark'} />

<main
	class="flex flex-col min-h-screen bg-repeat bg-emoji_pattern bg-[length:256px_256px] bg-black bg-blend-overlay bg-opacity-95"
>
	<NavBar />
	<div id="content" class="flex flex-col justify-between flex-1 overflow-y-auto">
		<div class="px-32 py-8">
			<slot />
		</div>
		<Footer />
	</div>
</main>
