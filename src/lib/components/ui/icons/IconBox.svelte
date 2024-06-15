<script lang="ts">
   import type { LinkIcon } from '$lib/model';
   import ClipSvg from '$lib/components/ui/icons/ClipSvg.svelte';

   export let icons: LinkIcon[];
</script>

<div class="flex max-w-48 flex-wrap justify-center">
   {#each icons as linkIcon}
      <a class="w-16 [&_div]:hover:bg-primary" href={linkIcon.link}>
         <ClipSvg path="logos/{linkIcon.svgPath}" class="aspect-square bg-white" />
      </a>
   {/each}
</div>
