<script lang="ts">
</script>

<div class="carousel-item h-page overflow-clip">
	<slot />
</div>

<style>
	.carousel-item {
		@apply box-content flex flex-none;
		scroll-snap-align: start;
	}
</style>
