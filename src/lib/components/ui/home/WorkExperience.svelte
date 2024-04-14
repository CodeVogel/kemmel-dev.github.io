<script lang="ts">
	import type { WorkExperience } from '$lib/model';
	import ExperienceCard from '$lib/components/ui/card/ExperienceCard.svelte';
	export let workExperience: WorkExperience[];
</script>

<div class="flex flex-col items-center mt-[50vh] gap-y-8">
	<h1 class="text-center">Experience</h1>
	<div class="flex flex-col gap-y-8">
		{#each workExperience as experience}
			<ExperienceCard {experience}></ExperienceCard>
		{/each}
	</div>
</div>
