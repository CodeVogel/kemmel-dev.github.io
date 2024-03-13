<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<main>
	<NavBar />
	<slot />
	<Footer />
</main>
