<script lang="ts">
   import SvxRenderer from '$lib/components/svx/SvxRenderer.svelte';
   import { page } from '$app/stores';
</script>

<SvxRenderer slug={$page.params.slug} />
