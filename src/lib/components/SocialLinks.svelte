<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let className = '';
	let socials = [
		{ icon: 'mdi:github', href: 'https://github.com/kemmel-dev/', name: 'GitHub' },
		{
			icon: 'mdi:linkedin',
			href: 'https://www.linkedin.com/in/kamiel-de-visser/',
			name: 'LinkedIn'
		},
		{ icon: 'mdi:resume', href: 'https://github.com/', name: 'Resume' }
	];
</script>

<div
	class="grid items-center justify-center h-full grid-flow-col-dense grid-rows-1 text-4xl gap-x-8 text-primary"
>
	{#each socials as social, i}
		<a
			href={social.href}
			class="flex flex-col items-center justify-center p-2 transition-colors duration-500 text-primary/25 hover:text-primary"
		>
			<iconify-icon icon={social.icon}></iconify-icon>
			<div class="text-sm">
				{social.name}
			</div>
		</a>
		{#if i !== socials.length - 1}
			<Separator orientation="vertical" class="h-8" />
		{/if}
	{/each}
</div>
