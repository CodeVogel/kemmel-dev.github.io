<script lang="ts">
   import { page } from '$app/stores';
   import Footer from '$lib/components/ui/footer/Footer.svelte';
   import NavBar from '$lib/components/ui/navigation/NavBar.svelte';
   import '../app.css';
   import 'iconify-icon';
   import WaveBorder from '$lib/components/ui/polish/WaveBorder.svelte';
</script>

<main class="flex flex-col overflow-x-clip font-sans text-white">
   <NavBar class="fixed z-50 h-[6rem] bg-background-800" />
   <WaveBorder
      flipY={false}
      class="fixed z-50 mt-[6rem] h-[4rem] border-b-[1px] border-accent/50 bg-gradient-to-b from-background-800 to-background-400 shadow-2xl shadow-black/50"
   />
   <div class="mt-[10rem] flex flex-grow flex-col">
      <slot />
   </div>
   <Footer class="min-h-[6rem]" />
</main>

<style>
   :global(html) {
      @apply bg-background-900;
   }

   :global(body) {
      background-image: url('/tile2.png');
   }

   :global(body, main) {
      @apply min-h-[100vh];
      background-position: center;
   }
</style>
