<script lang="ts">
	import BirdHero from '../lib/components/ui/home/BirdHero.svelte';
	import HeroCard from '$lib/components/ui/home/WorkExperience.svelte';
	import Viewnimation from '$lib/components/ui/polish/viewnimation/Viewnimation.svelte';

	export let data: import('./$types').PageServerData;
</script>

<div class="flex flex-col items-center">
	<Viewnimation>
		<BirdHero />
	</Viewnimation>
	<HeroCard workExperience={data.workExperiences} />
</div>
