<script lang="ts">
	import Logo from '$lib/components/ui/Logo.svelte';
	import ThemeButton from '$lib/components/ui/button/ThemeButton.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<nav class="flex flex-grow h-full p-4 border-2 border-solid border-border bg-secondary">
	<div class="flex m-auto basis-1/4">
		<Logo />
	</div>
	<div class="flex justify-center align-middle basis-1/2">
		<Button variant="link">Link 1</Button>
		<Separator orientation="vertical" />
		<Button variant="link">Link 2</Button>
	</div>
	<div class="flex justify-end align-middle basis-1/4">
		<ThemeButton on:toggleTheme />
	</div>
</nav>
