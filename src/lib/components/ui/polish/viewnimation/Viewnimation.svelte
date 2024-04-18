<script lang="ts">
	import { onMount } from 'svelte';

	let element: HTMLElement;
	const inviewClass = 'in-view';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(inviewClass);
					} else {
						entry.target.classList.remove(inviewClass);
					}
				});
			},
			{
				threshold: 0
			}
		);

		observer.observe(element);
	});

	export let fromLeft = true;
</script>

<div
	bind:this={element}
	class="viewnimation out-view"
	style={`transform: translateX(${fromLeft ? '-' : ''}100%)`}
>
	<slot />
</div>

<style>
	.out-view {
		@apply opacity-0;
	}

	.viewnimation {
		transition:
			opacity 1.5s,
			transform 1s;
	}

	:global(.in-view) {
		@apply !opacity-100  !translate-x-0;
	}
</style>
