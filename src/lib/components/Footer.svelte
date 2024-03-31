<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import WaveBorder from '$lib/components/WaveBorder.svelte';

	let className: string = '';
	export { className as class };
</script>

<footer class="{className} relative grid items-center">
	<WaveBorder flipY={true} class="absolute bottom-0 h-[6rem]" />
	<SocialLinks />
</footer>
