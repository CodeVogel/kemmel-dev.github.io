<script lang="ts">
	import ExperienceCard from '../card/ExperienceCard.svelte';
	import type { WorkExperience } from '$lib/model';

	import { onMount } from 'svelte';
	let workExperience: WorkExperience[] = [];

	onMount(async () => {
		const response = await fetch('/src/content/experience.json');
		workExperience = await response.json();
	});
</script>

<div class="max-w-4xl p-4 m-8 bg-background-100/25 rounded-3xl">
	<h1 class="mb-8">Experience</h1>
	{#each workExperience as experience}
		<ExperienceCard {experience}></ExperienceCard>
	{/each}
</div>
