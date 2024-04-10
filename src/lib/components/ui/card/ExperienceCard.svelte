<script lang="ts">
	import ClipSvg from '$lib/components/ui/svg/ClipSvg.svelte';
	import type { WorkExperience } from '$lib/model';

	export let experience: WorkExperience;
</script>

<div
	class="flex flex-col p-4 mb-4 border-2 shadow-md sm:flex-row rounded-xl gap-x-8 gap-y-4 bg-gradient-to-br from-background-300 to-background-800 border-accent-400"
>
	<a class="grid items-center [&_div]:hover:bg-primary basis-1/6" href={experience.company.website}>
		<ClipSvg
			path={experience.company.logo}
			class="flex items-center justify-center w-24 h-16 bg-white"
		></ClipSvg>
	</a>
	<div class="flex flex-col basis-3/6">
		<h1 class="mb-2 font-mono text-primary">{experience.position}</h1>
		<i>{experience.description}</i>
	</div>
	<div class="flex justify-end flex-grow">
		<div class="grid grid-cols-[min-content,min-content] gap-x-4">
			<span><iconify-icon icon="mdi-location"></iconify-icon></span>
			<p>{experience.location}</p>
			<p>From:</p>
			<p>{experience.timeSpan.startDate}</p>
			<p>To:</p>
			<p>{experience.timeSpan.endDate}</p>
		</div>
	</div>
</div>

<style lang="scss">
	h1 {
		@apply text-lg;
	}
</style>
