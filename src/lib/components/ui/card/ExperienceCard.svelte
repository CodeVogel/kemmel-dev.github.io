<script lang="ts">
   import ClipSvg from '$lib/components/ui/svg/ClipSvg.svelte';
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

<div class="grid grid-cols-[min-content,auto] gap-x-4 mx-2 max-w-lg">
   <a class="[&_div]:hover:bg-primary w-32 p-4" href={experience.company.website}>
      <ClipSvg path={experience.company.logo} class="bg-white aspect-square"></ClipSvg>
   </a>
   <div class="flex flex-col justify-center w-full group max-w-[24ch]">
      <h1 class="font-mono text-primary">{experience.position}</h1>
      <div class="relative">
         <div class="group-hover:opacity-0 transition-opacity duration-300">
            <div class="text-white/50 text-xs">
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
            class="absolute top-0 opacity-0 group-hover:opacity-100 text-white/50 text-xs transition-opacity duration-300"
            >{experience.description}</span
         >
      </div>
   </div>
</div>

<style lang="scss">
   h1 {
      @apply font-bold text-sm;
   }
</style>
