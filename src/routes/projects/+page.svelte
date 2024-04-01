<script lang="ts">
	import ProjectCard from '$lib/components/card/ProjectCard.svelte';
	import SVX from '$lib/components/svx/SVX.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		// For all files in $lib/svx, await their import and get their .metadata
	});

	async function getProjects() {
		// Get all metadata from files in $lib/svx
		const files = import.meta.glob('$lib/svx/*.svx');
		// Load ProjectSummary from the frontmatter of each file
		let projects: ProjectSummary[] = [];
		for (const path in files) {
			addProject(projects, path);
		}
		return projects;
	}

	async function addProject(projects: ProjectSummary[], path: string) {
		const svx = await import(/* @vite-ignore */ path);
		if (svx.metadata) {
			const { title, description, image } = svx.metadata;
			if (title && description && image) {
				const summary: ProjectSummary = { title, description, image };
				projects.push(summary);
			} else {
				console.error(`Incomplete frontmatter found for ${path}`);
			}
		} else {
			console.error(`No frontmatter found for ${path}`);
		}
	}
</script>

<div class="grid grid-cols-3">
	{#await getProjects()}
		<p>Loading...</p>
	{:then projects}
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</div>
