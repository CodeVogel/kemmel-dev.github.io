<script lang="ts">
	import type { WorkExperience } from '$lib/model';
	import ExperienceCard from '$lib/components/ui/card/ExperienceCard.svelte';
	export let workExperience: WorkExperience[];
</script>

<div class="max-w-4xl p-4 m-8 bg-background-100/25 rounded-3xl">
	<h1 class="mb-8">Experience</h1>
	{#each workExperience as experience}
		<ExperienceCard {experience}></ExperienceCard>
	{/each}
</div>
