<script lang="ts">
</script>

<div class="overflow-y-visible overflow-x-clip carousel-item min-h-page">
	<slot />
</div>

<style>
	.carousel-item {
		@apply box-content flex flex-none;
		scroll-snap-align: start;
	}
</style>
