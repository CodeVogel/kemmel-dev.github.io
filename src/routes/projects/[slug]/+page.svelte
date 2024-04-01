<script lang="ts">
	import SVX from '$lib/components/svx/SVX.svelte';
	import { page } from '$app/stores';
</script>

<div class="flex justify-center w-full">
	<SVX name={$page.params.slug} options="max-w-[64ch]"></SVX>
</div>
