<script lang="ts">
   import type { WorkExperience } from '$lib/model';
   import LinkIcon from '$lib/components/ui/icons/LinkIcon.svelte';
   export let experience: WorkExperience;

   function formatDate(date: Date | undefined) {
      if (!date) return 'Present';
      const d = new Date(date);
      return d.toLocaleDateString('en-US', {
         month: 'short',
         year: 'numeric'
      });
   }
</script>

<div class="mx-2 grid max-w-lg grid-cols-[min-content,auto] gap-x-4">
   <LinkIcon
      path={experience.company.logo}
      link={experience.company.website}
      class="!w-32 p-4 [&_div]:hover:bg-primary"
   ></LinkIcon>
   <div class="group flex w-full max-w-[24ch] flex-col justify-center">
      <h1 class="font-mono text-primary">{experience.position}</h1>
      <div>
         <div class="transition-all duration-500 group-hover:max-h-0 group-hover:opacity-0">
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
         <p
            class="max-h-0 text-xs text-white/50 opacity-0 transition-all duration-500 group-hover:max-h-[500px] group-hover:opacity-100"
         >
            {experience.description}
         </p>
      </div>
   </div>
</div>

<style lang="scss">
   h1 {
      @apply text-sm font-bold;
   }
</style>
