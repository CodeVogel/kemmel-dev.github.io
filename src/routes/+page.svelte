<script lang="ts">
	import AutoGrowTypeWriter from '$lib/components/AutoGrowTypeWriter.svelte';
	import BirdLogo from '$lib/components/logo/BirdLogo.svelte';
</script>

<div class="flex flex-col items-center justify-center flex-grow h-full gap-y-8">
	<div class="h-24">
		<AutoGrowTypeWriter
			class="p-8 rounded-lg bg-accent"
			msDelayBetweenChars={150}
			msDelayBetweenElements={1000}
		>
			<div>Hello World <b>&nbsp;Big World</b></div>
			<p class="p-2 bg-red-400">Check this out!</p>
		</AutoGrowTypeWriter>
	</div>

	<BirdLogo class="max-h-[3lh]" />
</div>
