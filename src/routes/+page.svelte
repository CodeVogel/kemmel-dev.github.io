<script lang="ts">
	import AutoGrowTypeWriter from '$lib/components/AutoGrowTypeWriter.svelte';
	import BirdLogo from '$lib/components/logo/BirdLogo.svelte';
</script>

<div class="flex flex-col items-center justify-center flex-grow h-full gap-y-8">
	<div class="grid items-end justify-center grid-rows-1 h-[11rem]">
		<div class="w-64 max-w-64 speech-bubble">
			<AutoGrowTypeWriter
				class="p-8 rounded-lg bg-accent"
				msDelayBetweenChars={50}
				msDelayBetweenElements={50}
				preRender={false}
			>
				<h1>Hi!</h1>
				<h2>
					My name is <br />
					<span class="flex flex-row items-baseline">
						<div class="px-1 py-1 mt-2 font-bold text-black rounded-lg w-fit bg-primary">
							CodeVogel
						</div>
						.
					</span>
				</h2>
				<div class="mt-2 font-extralight">
					I make <span class="text-primary">games</span> and build
					<span class="text-primary">software</span>.
				</div>
				<div class="font-extralight">
					Check out some of my
					<a href="/projects" class="font-normal underline text-primary"
						><span>projects<iconify-icon class="ms-1" icon="ion:open-outline"></iconify-icon></span
						></a
					>
					!
				</div>
			</AutoGrowTypeWriter>
		</div>
	</div>
	<BirdLogo class="max-h-[5lh]" />
</div>

<style>
	h2 {
		@apply text-3xl;
	}

	.speech-bubble {
		@apply relative bg-accent rounded-2xl;
	}

	.speech-bubble:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 0;
		border: 1em solid transparent;
		border-top-color: theme('colors.accent.DEFAULT');
		border-bottom: 0;
		border-left: 0;
		margin-left: -0.5em;
		margin-bottom: -1em;
	}
</style>
