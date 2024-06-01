<script lang="ts">
   import BirdHero from '../lib/components/ui/home/BirdHero.svelte';
   import HeroCard from '$lib/components/ui/home/WorkExperience.svelte';
   import Viewnimation from '$lib/components/ui/polish/viewnimation/Viewnimation.svelte';
   import { onMount } from 'svelte';
   export let data: import('./$types').PageServerData;

   onMount(() => {
      // on scroll, change the color of the icon
      window.addEventListener('scroll', () => {
         let scrollIndicator = document.querySelector('#scroll-indicator') as HTMLElement | null;
         if (scrollIndicator) {
            scrollIndicator.style.opacity = `${1 - scrollY / 200}`;
         }
      });
   });
</script>

<div class="grid grid-cols-1 gap-y-8">
   <iconify-icon
      id="scroll-indicator"
      icon="mdi:arrow-bottom-circle"
      class="fixed bottom-6 right-6 text-6xl text-primary/50"
   ></iconify-icon>
   <div class="flex flex-col items-center w-full min-h-screen">
      <Viewnimation>
         <BirdHero />
      </Viewnimation>
   </div>
   <div>
      <HeroCard workExperience={data.workExperiences} />
   </div>
</div>
