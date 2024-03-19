<script lang="ts">
	export let options = '';

	let socials = [
		{ icon: 'mdi:github', href: 'https://github.com/kemmel-dev/', name: 'Github' },
		{ icon: 'mdi:linkedin', href: '/someLink.html', name: 'LinkedIn' },
		{ icon: 'mdi:resume', href: '/someLink.html', name: 'Resume' }
	];
</script>

<div
	class="flex flex-row gap-x-8 {options} divide-x-[1px] [&>*]:px-8 first:[&>*]:ps-0 last:[&>*]:pe-0 divide-accent"
>
	{#each socials as social}
		<a href={social.href} class="flex flex-col items-center hover:text-primary">
			<iconify-icon icon={social.icon}></iconify-icon>
			<div class="text-[30%] font-extralight">{social.name}</div>
		</a>
	{/each}
</div>
