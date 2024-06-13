<script lang="ts">
   import type { LinkIcon } from '$lib/model';
   import ClipSvg from '$lib/components/ui/icons/ClipSvg.svelte';

   export let icons: LinkIcon[];
</script>

<div class="flex flex-wrap justify-center max-w-48">
   {#each icons as linkIcon}
      <a class="w-16 [&_div]:hover:bg-primary" href={linkIcon.url}>
         <ClipSvg path="logos/{linkIcon.icon}" class="aspect-square bg-white" />
      </a>
   {/each}
</div>
