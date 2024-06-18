<script lang="ts">
   import BirdHero from '../lib/components/ui/home/BirdHero.svelte';
   import Viewnimation from '$lib/components/ui/polish/viewnimation/Viewnimation.svelte';
   import { onMount } from 'svelte';
   import Skills from '$lib/components/ui/home/Skills.svelte';
   import WorkExperience from '$lib/components/ui/home/WorkExperience.svelte';
   import Socials from '$lib/components/ui/home/Socials.svelte';

   onMount(() => {
      const scrollIndicator = document.querySelector('#scroll-indicator') as HTMLElement | null;

      if (scrollIndicator) {
         window.addEventListener('scroll', () => {
            scrollIndicator.style.opacity = `${1 - scrollY / 200}`;
         });
      }

      // after delay, show scroll indicator
      setTimeout(() => {
         if (scrollIndicator) {
            scrollIndicator.classList.remove('hidden');
         }
      }, 2000);
   });
</script>

<div class="mb-16 grid grid-cols-1 gap-y-32">
   <iconify-icon
      id="scroll-indicator"
      icon="line-md:arrow-down"
      class="fixed bottom-6 right-6 hidden text-4xl text-white/50"
   ></iconify-icon>
   <div class="flex min-h-[calc(100dvh-theme(spacing.nav))] w-full flex-col items-center">
      <Viewnimation>
         <BirdHero />
      </Viewnimation>
   </div>
   <Socials />
   <WorkExperience />
   <div>
      <Skills />
   </div>
</div>
