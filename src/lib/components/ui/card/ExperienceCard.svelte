<script lang="ts">
	import ClipSvg from '$lib/components/ui/svg/ClipSvg.svelte';
	import type { WorkExperience } from '$lib/model';

	export let experience: WorkExperience;
</script>

<div class="grid grid-cols-[min-content,min-content] gap-x-4">
	<a
		class="[&_div]:hover:bg-primary bg-gradient-to-t from-black to-accent-500 border-white/20 border-[1px] shadow-xl shadow-black/80 hover:bg-primary w-32 p-4 rounded-3xl"
		href={experience.company.website}
	>
		<ClipSvg path={experience.company.logo} class="bg-white aspect-square"></ClipSvg>
	</a>
	<div class="flex flex-col justify-center min-w-64">
		<h1 class="font-mono text-primary">{experience.position}</h1>
		<div class="text-xs text-white/50 gap-x-2">
			<span
				><iconify-icon icon="mdi-location" class="text-primary"></iconify-icon>
				{experience.location}</span
			>
			<p>{experience.timeSpan.startDate} - {experience.timeSpan.endDate}</p>
		</div>
	</div>
</div>

<style lang="scss">
	h1 {
		@apply font-bold text-sm;
	}
</style>
