<script lang="ts">
	import '../app.pcss';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main class="flex flex-col min-h-screen text-white dark bg-background">
	<NavBar />
	<div id="content" class="flex flex-col justify-between flex-1 overflow-y-auto">
		<slot />
		<Footer />
	</div>
</main>
