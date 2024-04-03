<script lang="ts">
	export let data;
</script>

<div class="flex justify-center w-full">
	{data.meta.title}
	<svelte:component this={data.content} />
</div>
