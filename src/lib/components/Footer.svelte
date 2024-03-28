<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	let className: string = '';
	export { className as class };
</script>

<footer class="{className} border-accent border-t-[1px] grid items-center">
	<SocialLinks />
</footer>
