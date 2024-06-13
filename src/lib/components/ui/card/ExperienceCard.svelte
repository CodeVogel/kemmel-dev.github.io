<script lang="ts">
   import ClipSvg from '$lib/components/ui/icons/ClipSvg.svelte';
   import type { WorkExperience } from '$lib/model';

   export let experience: WorkExperience;

   function formatDate(date: Date) {
      const d = new Date(date);
      if (isNaN(d.getTime())) return 'Present';
      return d.toLocaleDateString('en-US', {
         month: 'short',
         year: 'numeric'
      });
   }
</script>

<div class="mx-2 grid max-w-lg grid-cols-[min-content,auto] gap-x-4">
   <a class="w-32 p-4 [&_div]:hover:bg-primary" href={experience.company.website}>
      <ClipSvg path={experience.company.logo} class="aspect-square bg-white"></ClipSvg>
   </a>
   <div class="group flex w-full max-w-[24ch] flex-col justify-center">
      <h1 class="font-mono text-primary">{experience.position}</h1>
      <div class="relative">
         <div class="transition-opacity duration-300 group-hover:opacity-0">
            <div class="text-xs text-white/50">
               <span
                  ><iconify-icon icon="mdi-location" class="text-primary"></iconify-icon>
                  {experience.location}</span
               >
               <p>
                  {formatDate(experience.timespan.startDate)} - {formatDate(
                     experience.timespan.endDate
                  )}
               </p>
            </div>
         </div>
         <span
            class="absolute text-xs text-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >{experience.description}</span
         >
      </div>
   </div>
</div>

<style lang="scss">
   h1 {
      @apply text-sm font-bold;
   }
</style>
