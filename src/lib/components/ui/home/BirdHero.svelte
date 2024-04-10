<script lang="ts">
	import AutoGrowTypeWriter from '$lib/components/ui/polish/typewriter/AutoGrowTypeWriter.svelte';
	import BirdLogo from '$lib/components/ui/polish/logo/BirdLogo.svelte';
</script>

<div class="flex flex-col items-center justify-end gap-y-8 min-h-[calc(8rem+10lh)] mt-8">
	<div class="speech-bubble">
		<AutoGrowTypeWriter
			class="p-6 rounded-lg min-w-80"
			msDelayBetweenChars={20}
			msDelayBetweenElements={350}
			preRender={false}
		>
			<h1>Hi!</h1>
			<h2>
				<div class="max-w-[9ch] sm:max-w-full">
					My name is
					<span class="px-1 font-bold text-black rounded-lg w-fit bg-primary"> CodeVogel </span>.
				</div>
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
	<BirdLogo class="w-[8rem]" />
</div>

<style>
	h2 {
		@apply text-3xl;
	}

	.speech-bubble {
		@apply relative rounded-2xl bg-background-300;
	}

	.speech-bubble:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 0;
		border: 1em solid transparent;
		border-top-color: theme('colors.background.300');
		border-bottom: 0;
		border-left: 0;
		margin-left: -0.5em;
		margin-bottom: -1em;
	}
</style>
