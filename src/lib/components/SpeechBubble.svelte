<script lang="ts">
	import TypeWriter from './TypeWriter.svelte';

	let height = 0;

	function onChange() {
		const speechBubble = document.querySelector('#typewriter-content');
		height = speechBubble.offsetHeight;
		console.log('height after change: ' + height);
	}
</script>

<div class="flex justify-center mt-24">
	<div class="speech-bubble" style={`height:${height}px`}>
		<div class="p-8" id={'typewriter-content'}>
			<TypeWriter on:change={onChange} class="" />
		</div>
	</div>
</div>

<style>
	.speech-bubble {
		background: red;
		position: relative;
		border-radius: 0.4em;
		transition: height 0.5s ease;
	}

	.speech-bubble:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		border: 20px solid transparent;
		border-top-color: red;
		border-bottom: 0;
		margin-left: -20px;
		margin-bottom: -20px;
	}
</style>
