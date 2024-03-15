<script lang="ts">
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import '../app.pcss';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<ModeWatcher defaultMode={'dark'} />
<main class="h-full font-sans bg-background">
	<NavBar on:toggleTheme={toggleMode} />
	<slot />
	<Footer />
</main>
