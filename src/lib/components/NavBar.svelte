<script lang="ts">
	import Logo from '$lib/components/logo/Logo.svelte';
	import ThemeButton from '$lib/components/ui/button/ThemeButton.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import NavButton from '$lib/components/ui/button/NavButton.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	// The pages to be displayed in the navbar.
	const pages = [
		{ name: '/', href: '/' },
		{ name: '/projects', href: '/projects' },
		{ name: '/about', href: '/about' }
	];
	// Equally sized array to keep track of which button is hovered.
	const hoveredOverPage = Array(pages.length).fill(false);

	// Hide the separator when the current or next button is hovered.
	$: shouldHide = (buttonIndex: number) => {
		if (hoveredOverPage[buttonIndex]) return true;
		return buttonIndex + 1 < hoveredOverPage.length && hoveredOverPage[buttonIndex + 1];
	};
</script>

<nav class="flex h-16 bg-black border-b-2 border-solid border-border">
	<div class="flex items-center h-full basis-1/4">
		<Button href="/" variant="link">
			<Logo />
		</Button>
	</div>
	<div class="flex items-center justify-center h-full basis-1/2">
		{#each pages as page, index}
			<NavButton href={page.href} name={page.name} bind:hovered={hoveredOverPage[index]} />
			<!-- Skip the separator if no more items follow -->
			{#if index !== pages.length - 1}
				<!-- bg-transparant ensures the separator is hidden but navbar stays the same size. -->
				<Separator orientation="vertical" class="h-8 {shouldHide(index) ? 'bg-transparent' : ''}" />
			{/if}
		{/each}
	</div>
	<div class="flex items-center justify-end h-full px-8 basis-1/4">
		<ThemeButton on:toggleTheme />
	</div>
</nav>
