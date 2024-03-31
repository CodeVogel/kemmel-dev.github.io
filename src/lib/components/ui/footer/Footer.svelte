<script lang="ts">
	import SocialLinks from '$lib/components/ui/footer/SocialLinks.svelte';
	import WaveBorder from '$lib/components/ui/polish/WaveBorder.svelte';

	let className: string = '';
	export { className as class };
</script>

<footer class="{className} relative grid items-center">
	<WaveBorder flipY={true} class="absolute bottom-0 h-[6rem]" />
	<SocialLinks />
</footer>
