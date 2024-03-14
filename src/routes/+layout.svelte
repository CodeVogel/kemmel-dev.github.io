<script lang="ts">
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import '../app.pcss';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<ModeWatcher defaultMode={'dark'} />
<main class="h-full bg-background">
	<NavBar on:toggleTheme={toggleMode} />
	<slot />
	<Footer />
</main>
