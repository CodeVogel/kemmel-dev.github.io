<script lang="ts">
	import Logo from '$lib/components/ui/Logo.svelte';
	import ThemeButton from '$lib/components/ui/button/ThemeButton.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<nav class="flex items-center h-full border-b-2 border-solid border-border">
	<div class="flex py-4 my-auto basis-1/4">
		<Logo />
	</div>
	<div class="flex justify-center basis-1/2">
		<Button variant="link" class="flex h-full px-8 rounded-none hover:bg-accent">Link 1</Button>
		<Separator orientation="vertical" class="h-10" />
		<Button variant="link" class="flex h-full px-8 rounded-none hover:bg-accent">Link 2</Button>
	</div>
	<div class="flex justify-end px-8 basis-1/4">
		<ThemeButton on:toggleTheme />
	</div>
</nav>
