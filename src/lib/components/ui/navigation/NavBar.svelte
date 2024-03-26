<script lang="ts">
	import WordLogo from '$lib/components/logo/WordLogo.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { page } from '$app/stores';
	import NavButton from './NavButton.svelte';

	// The routes to be displayed in the navbar.
	const routes = [
		{ name: 'Home', href: '/', hovered: false },
		{ name: 'Projects', href: '/projects/', hovered: false },
		{ name: 'About', href: '/about/', hovered: false }
	];

	$: navButtonColor = (route: any) => {
		if (route.hovered) return 'text-primary';
		const active = $page.url.pathname === route.href;
		if (active) {
			const noOtherRouteHovered = routes
				.filter((route) => route.href !== '/') // Exclude the current page
				.every((route) => !route.hovered);
			if (noOtherRouteHovered) return 'text-primary';
		}
		return 'text-primary/75';
	};

	let className = '';
	export { className as class };
</script>

<nav
	class="{className} grid items-center justify-center w-full grid-rows-2 border-b-[1px] border-accent"
>
	<a href="/" class="mt-6">
		<WordLogo />
	</a>
	<div class="grid justify-center grid-flow-col-dense grid-rows-1 mt-4 gap-x-4">
		{#each routes as route, index}
			<NavButton
				class="{navButtonColor(
					route
				)} underline decoration-transparent hover:decoration-primary transition-colors duration-500"
				name={route.name}
				href={route.href}
				bind:hovered={route.hovered}
			/>
			<!-- Skip the separator if no more items follow -->
			{#if index !== routes.length - 1}
				<!-- bg-transparant ensures the separator is hidden but navbar stays the same size. -->
				<Separator orientation="vertical" class="h-8" />
			{/if}
		{/each}
	</div>
</nav>
