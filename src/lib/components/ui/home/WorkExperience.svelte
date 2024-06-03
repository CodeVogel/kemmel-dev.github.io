<script lang="ts">
   import Viewnimation from '$lib/components/ui/polish/viewnimation/Viewnimation.svelte';
   import type { WorkExperience } from '$lib/model';
   import ExperienceCard from '$lib/components/ui/card/ExperienceCard.svelte';
   export let currentWork: WorkExperience[];
   export let pastWork: WorkExperience[];
</script>

<div class="flex flex-col items-center w-full">
   <Viewnimation>
      <h1 class="text-center">Experience</h1>
      <p class="mt-2 text-xs text-white/25">(Hover over the cards to see more details)</p>
   </Viewnimation>
   <div class="grid items-center grid-cols-1 w-max-lg pt-8 pb-8">
      <h3 class="text-center text-white/50 font-mono">Current jobs</h3>
      {#each currentWork as experience, i}
         <Viewnimation fromLeft={i % 2 !== 0}>
            <ExperienceCard {experience}></ExperienceCard>
         </Viewnimation>
      {/each}
      <h3 class="text-center text-white/50 font-mono">Past jobs</h3>
      {#each pastWork as experience, i}
         <Viewnimation fromLeft={i % 2 !== 0}>
            <ExperienceCard {experience}></ExperienceCard>
         </Viewnimation>
      {/each}
   </div>
</div>
