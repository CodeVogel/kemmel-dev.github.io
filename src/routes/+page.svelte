<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import BirdLogo from '$lib/components/logo/BirdLogo.svelte';
	import SVX from '$lib/components/SVX.svelte';
</script>

<div class="flex flex-col items-center justify-center flex-grow h-full text-center">
	<BirdLogo />
	<SVX name="home-page" centerX={true} />
</div>
