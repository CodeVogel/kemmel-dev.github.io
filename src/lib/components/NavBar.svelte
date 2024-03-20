<script lang="ts">
	import WordLogo from '$lib/components/logo/WordLogo.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	// The pages to be displayed in the navbar.
	const pages = [
		{ name: '/', href: '/' },
		{ name: '/projects', href: '/projects' },
		{ name: '/about', href: '/about' }
	];
</script>

<nav class="grid items-center justify-center h-32 grid-rows-2">
	<a href="/" class="mt-6">
		<WordLogo />
	</a>
	<div class="grid justify-center grid-flow-col-dense grid-rows-1 gap-x-4">
		{#each pages as page, index}
			<a href={page.href} class="text-primary hover:text-accent-foreground">{page.name}</a>
			<!-- Skip the separator if no more items follow -->
			{#if index !== pages.length - 1}
				<!-- bg-transparant ensures the separator is hidden but navbar stays the same size. -->
				<Separator orientation="vertical" class="h-8" />
			{/if}
		{/each}
	</div>
</nav>
