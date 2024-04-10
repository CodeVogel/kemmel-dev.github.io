<script lang="ts">
	import BirdHero from '../lib/components/ui/home/BirdHero.svelte';
	import HeroCard from '$lib/components/ui/home/WorkExperience.svelte';

	export let data;
</script>

<div class="flex flex-col items-center">
	<BirdHero />
	<HeroCard workExperience={data.workExperience} />
</div>
