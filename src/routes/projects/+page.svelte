<script lang="ts">
	import ProjectCard from '$lib/components/card/ProjectCard.svelte';
	import SVX from '$lib/components/svx/SVX.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		// For all files in $lib/svx, await their import and get their .metadata
	});

	interface SVX {
		metadata: {
			title: string;
			description: string;
			media: string;
		};
	}

	async function getProjects() {
		// Get all metadata from files in $lib/svx
		const files = import.meta.glob('/src/svx/*.svx');
		console.log('files: ', files);
		// Load ProjectSummary from the frontmatter of each file
		let projects: ProjectSummary[] = [];
		for (const path in files) {
			await files[path]().then((svx: unknown) => {
				const typedSvx = svx as SVX;
				if (typedSvx && typeof typedSvx === 'object' && 'metadata' in typedSvx) {
					const { title, description, media } = typedSvx.metadata;
					if (title && description && media) {
						// Get the name of the file without the .svx extension
						const svxName = (path.split('/').pop() as string).slice(0, -4);
						// Create and then add summary to projects
						const summary: ProjectSummary = { svxName, title, description, media };
						projects.push(summary);
					} else {
						console.error(
							`Incomplete frontmatter found for ${path}. Found this metadata:`,
							typedSvx.metadata
						);
					}
				} else {
					console.error(`No frontmatter found for ${path}`);
				}
			});
		}
		return projects;
	}

	let visible = false;
</script>

<div class="flex justify-center w-full">
	<div
		class="grid items-center flex-grow max-w-screen-xl grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12"
	>
		{#await getProjects()}
			<p
				transition:fade={{ delay: 250, duration: 500 }}
				on:introstart={() => (visible = false)}
				on:outroend={() => (visible = true)}
			>
				Loading...
			</p>
		{:then projects}
			{#each projects as project}
				{#if visible}
					<div transition:fade={{ delay: 250, duration: 1000 }}><ProjectCard {project} /></div>
				{/if}
			{/each}
		{:catch error}
			<p>{error.message}</p>
		{/await}
	</div>
</div>
