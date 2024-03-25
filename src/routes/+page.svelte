<script lang="ts">
	import AutoGrowTypeWriter from '$lib/components/AutoGrowTypeWriter.svelte';
	import BirdLogo from '$lib/components/logo/BirdLogo.svelte';
</script>

<div class="flex flex-col items-center justify-center flex-grow h-full gap-y-8">
	<div class="h-24">
		<AutoGrowTypeWriter
			class="p-8 rounded-lg bg-accent"
			msDelayBetweenChars={50}
			msDelayBetweenElements={1000}
		>
			<div>Hello <b>World</b></div>
			<div>This is a test.</div>
		</AutoGrowTypeWriter>
	</div>

	<BirdLogo class="max-h-[3lh]" />
</div>
