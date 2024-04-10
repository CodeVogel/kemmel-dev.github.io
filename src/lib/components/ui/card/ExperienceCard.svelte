<script lang="ts">
	import ClipSvg from '$lib/components/ui/svg/ClipSvg.svelte';
	import type { WorkExperience } from '$lib/model';

	export let experience: WorkExperience;
</script>

<div
	class="grid grid-flow-row-dense p-4 mb-4 border-2 shadow-md rounded-xl gap-x-8 gap-y-4 bg-gradient-to-b from-background-300 to-background-500 border-accent-400"
>
	<a class="hover:text-primary [&>div]:hover:bg-primary" href={experience.company.website}>
		<ClipSvg path={experience.company.logo} class="bg-white mt-[.3lh] w-32 h-8"></ClipSvg>
	</a>
	<div class="flex flex-col">
		<h2 class="mb-2 font-mono text-primary">{experience.position}</h2>
		<i>{experience.description}</i>
	</div>
	<div class="flex flex-col text-white/75">
		<p>{experience.location}</p>
		<p>{experience.timeSpan.startDate} - {experience.timeSpan.endDate}</p>
	</div>
</div>
