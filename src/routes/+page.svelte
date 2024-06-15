<script lang="ts">
   import BirdHero from '../lib/components/ui/home/BirdHero.svelte';
   import WorkExperience from '$lib/components/ui/home/WorkExperience.svelte';
   import Viewnimation from '$lib/components/ui/polish/viewnimation/Viewnimation.svelte';
   import { onMount } from 'svelte';
   import Skills from '$lib/components/ui/home/Skills.svelte';

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
   <div class="flex min-h-[calc(100dvh-theme(spacing.nav))] w-full flex-col items-center">
      <Viewnimation>
         <BirdHero />
      </Viewnimation>
   </div>
   <div>
      <WorkExperience pastWork={data.pastWork} currentWork={data.currentWork} />
   </div>
   <div>
      <Skills />
   </div>
</div>
