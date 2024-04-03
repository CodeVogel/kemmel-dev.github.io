<script lang="ts">
	import ProjectCard from '$lib/components/card/ProjectCard.svelte';

	// Loads the data from ./+page.server.ts -> load()
	export let data;
</script>

<div class="flex justify-center w-full">
	<div
		class="grid items-center flex-grow max-w-screen-xl grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12"
	>
		{#each data.posts as post}
			<ProjectCard {post} />
		{/each}
	</div>
</div>
