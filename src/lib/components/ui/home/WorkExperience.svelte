<script lang="ts">
   import Viewnimation from '$lib/components/ui/polish/viewnimation/Viewnimation.svelte';
   import type { WorkExperience } from '$lib/model';
   import ExperienceCard from '$lib/components/ui/card/ExperienceCard.svelte';

   import workExperienceData from '$lib/data/experience.json';

   const pastWork: WorkExperience[] = [];
   const currentWork: WorkExperience[] = [];

   function ddmmyyyyToDate(dateString: string): Date {
      const [day, month, year] = dateString.split('-');
      return new Date(`${month}-${day}-${year}`);
   }

   const workExperience = workExperienceData.map((experience) => {
      return {
         ...experience,
         timespan: {
            startDate: ddmmyyyyToDate(experience.timespan.startDate),
            endDate: experience.timespan.endDate
               ? ddmmyyyyToDate(experience.timespan.endDate)
               : undefined
         }
      };
   });

   // convert date strings to Date objects
   workExperience.forEach((workExperience: WorkExperience) => {
      const timespan = workExperience.timespan;
      if (timespan.endDate) {
         pastWork.push(workExperience);
      } else {
         currentWork.push(workExperience);
      }
   });

   // sort by start date
   currentWork.sort((a: WorkExperience, b: WorkExperience) => {
      return b.timespan.startDate.getTime() - a.timespan.startDate.getTime();
   });
   pastWork.sort((a: WorkExperience, b: WorkExperience) => {
      return b.timespan.startDate.getTime() - a.timespan.startDate.getTime();
   });
</script>

<div class="flex w-full flex-col items-center">
   <Viewnimation>
      <h1 class="text-center">Experience</h1>
      <p class="mt-2 text-xs text-white/25">(Hover over the cards to see more details)</p>
   </Viewnimation>
   <div class="w-max-lg grid grid-cols-1 items-center pb-8 pt-8">
      <h3 class="text-center font-mono text-white/50">Current jobs</h3>
      {#each currentWork as experience, i}
         <Viewnimation fromLeft={i % 2 !== 0}>
            <ExperienceCard {experience}></ExperienceCard>
         </Viewnimation>
      {/each}
      <h3 class="text-center font-mono text-white/50">Past jobs</h3>
      {#each pastWork as experience, i}
         <Viewnimation fromLeft={i % 2 !== 0}>
            <ExperienceCard {experience}></ExperienceCard>
         </Viewnimation>
      {/each}
   </div>
</div>
