<script lang="ts">
	import AutoGrowTypeWriter from '$lib/components/AutoGrowTypeWriter.svelte';
	import BirdLogo from '$lib/components/logo/BirdLogo.svelte';
</script>

<div class="flex flex-col items-center justify-center flex-grow h-full gap-y-8">
	<div class="grid items-end justify-center h-64 grid-rows-1">
		<div class="w-64 max-w-64 speech-bubble">
			<AutoGrowTypeWriter
				class="p-8 rounded-lg bg-accent"
				msDelayBetweenChars={50}
				msDelayBetweenElements={1500}
			>
				<h1>Hi!</h1>
				<h2>
					My name is <br /><span class="font-bold text-black bg-primary">CodeVogel</span>.
				</h2>
				<span class="font-extralight"
					>I make <span class="text-primary">games</span> and build
					<span class="text-primary">software</span>.</span
				>
			</AutoGrowTypeWriter>
		</div>
	</div>

	<BirdLogo class="max-h-[3lh]" />
</div>

<style>
	h2 {
		@apply text-3xl;
	}

	.speech-bubble {
		@apply relative bg-accent rounded-lg;
	}

	.speech-bubble:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 0;
		border: 1em solid transparent;
		border-top-color: theme('colors.accent');
		border-bottom: 0;
		border-left: 0;
		margin-left: -0.5em;
		margin-bottom: -1em;
	}
</style>
