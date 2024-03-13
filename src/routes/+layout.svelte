<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<main class="h-full text-white bg-background">
	<NavBar />
	<slot />
	<Footer />
</main>
