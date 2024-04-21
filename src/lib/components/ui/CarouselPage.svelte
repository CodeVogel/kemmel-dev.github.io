<script lang="ts">
</script>

<div class="overflow-visible carousel-item h-page">
	<slot />
</div>

<style>
	.carousel-item {
		@apply box-content flex flex-none;
		scroll-snap-align: start;
	}
</style>
