<script lang="ts">
   import LinkIcon from '$lib/components/ui/icons/LinkIcon.svelte';
   import type { LinkIcon as LinkIconModel } from '$lib/model';

   export let icons: LinkIconModel[];
</script>

<div class="flex max-w-48 flex-wrap justify-center gap-x-4 gap-y-4">
   {#each icons as linkIcon}
      <LinkIcon path="/logos/{linkIcon.svgPath}" link={linkIcon.link}></LinkIcon>
   {/each}
</div>
