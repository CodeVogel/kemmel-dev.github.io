<script lang="ts">
	export let project: ProjectSummary | null = null;
</script>

{#if project !== null}
	<div class="bg-red-400 p8">
		<h1>{project.title}</h1>
		<p>{project.description}</p>
	</div>
{/if}
