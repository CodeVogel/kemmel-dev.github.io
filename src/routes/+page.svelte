<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import BirdLogo from '$lib/components/logo/BirdLogo.svelte';
	import SVX from '$lib/components/SVX.svelte';
</script>

<div class="flex flex-grow">
	<div
		class="flex flex-col items-center justify-center [&>*]:py-8 first:[&>*]:pt-0 last:[&>*]:pb-0 divide-y-[1px] divide-accent basis-1/3"
	>
		<BirdLogo />
		<h1>CodeVogel</h1>
		<SVX name="contact-info" options="font-light" />
		<SocialLinks options="text-6xl" />
	</div>
	<div class="basis-2/3">
		<SVX
			name="home-page"
			centerY={true}
			grow={true}
			options="flex-grow px-32 [&>p]:font-light [&>p]:text-2xl "
		/>
	</div>
</div>
