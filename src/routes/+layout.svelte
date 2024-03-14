<script lang="ts">
	import '../app.pcss';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<main class="h-full dark bg-background">
	<NavBar />
	<slot />
	<Footer />
</main>
