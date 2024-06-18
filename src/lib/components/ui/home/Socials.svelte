<script lang="ts">
   import IconBox from '$lib/components/ui/icons/IconBox.svelte';
   import type { LinkIcon } from '$lib/model';
   import socials from '$lib/data/socials.json';

   const linkIcons: LinkIcon[] = [];
   linkIcons.push(socials.github);
   linkIcons.push(socials.linkedIn);
</script>

<div class="flex flex-col items-center">
   <h2 class="mb-4">Find me on</h2>
   <IconBox icons={linkIcons}></IconBox>
</div>
