<script lang="ts">
	import BirdHero from '../lib/components/ui/home/BirdHero.svelte';
	import HeroCard from '$lib/components/ui/home/WorkExperience.svelte';
	import Viewnimation from '$lib/components/ui/polish/viewnimation/Viewnimation.svelte';
	import CarouselPage from '$lib/components/ui/CarouselPage.svelte';

	export let data: import('./$types').PageServerData;
</script>

<div class="h-page carousel carousel-vertical">
	<CarouselPage>
		<div class="flex flex-col items-center w-full">
			<Viewnimation>
				<BirdHero />
			</Viewnimation>
		</div>
	</CarouselPage>
	<CarouselPage>
		<HeroCard workExperience={data.workExperiences} />
	</CarouselPage>
</div>

<style>
	.carousel {
		@apply inline-flex overflow-x-scroll;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;

		&-vertical {
			@apply flex-col overflow-y-scroll;
			scroll-snap-type: y mandatory;
		}
	}
</style>
