<script lang="ts">
   import Viewnimation from '$lib/components/ui/polish/viewnimation/Viewnimation.svelte';
   import type { WorkExperience } from '$lib/model';
   import ExperienceCard from '$lib/components/ui/card/ExperienceCard.svelte';
   export let workExperience: WorkExperience[];
</script>

<div class="flex flex-col items-center w-full">
   <Viewnimation>
      <h1 class="text-center">Experience</h1>
   </Viewnimation>
   <div class="grid items-center grid-cols-1 w-max-lg">
      {#each workExperience as experience, i}
         <Viewnimation fromLeft={i % 2 !== 0}>
            <ExperienceCard {experience}></ExperienceCard>
         </Viewnimation>
      {/each}
   </div>
</div>
