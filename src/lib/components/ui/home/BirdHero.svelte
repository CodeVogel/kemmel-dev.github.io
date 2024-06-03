<script lang="ts">
   import AutoGrowTypeWriter from '$lib/components/ui/polish/typewriter/AutoGrowTypeWriter.svelte';
</script>

<div class="flex flex-col items-center">
   <div class="min-h-[10lh] mt-8 content-end">
      <div class="relative speech-bubble rounded-2xl bg-background-300">
         <AutoGrowTypeWriter
            class="p-8 rounded-lg shadow-xl bg-inherit shadow-black/80 min-w-[28ch]"
            msDelayBetweenChars={20}
            msDelayBetweenElements={500}
            preRender={false}
         >
            <h1>Hi!</h1>
            <h2>
               <div class="max-w-[9ch] sm:max-w-full">
                  My name is
                  <span class="px-1 font-bold text-black rounded-lg w-fit bg-primary">
                     CodeVogel
                  </span>.
               </div>
            </h2>
            <div class="mt-2 font-extralight">
               I make <span class="text-primary">games</span> and build
               <span class="text-primary">software</span>.
            </div>
            <div class="font-extralight">
               Check out some of my
               <a href="/projects" class="font-normal underline text-primary"
                  ><span
                     >projects<iconify-icon class="ms-1" icon="ion:open-outline"
                     ></iconify-icon></span
                  ></a
               >
               !
            </div>
         </AutoGrowTypeWriter>
      </div>
   </div>
   <img
      class="w-[8rem] mt-12 shadow-[5px_6px_15px_2px_#000000aa] rounded-[100vw]"
      src="/logos/logo-codevogel-head.svg"
   />
</div>

<style>
   h2 {
      @apply text-3xl;
   }

   .speech-bubble:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 2em solid transparent;
      border-top-color: theme('colors.background.300');
      border-bottom: 0;
      border-left: 0;
      margin-left: -0.5em;
      margin-bottom: -1em;
      transform: scaleY(1.5);
   }
</style>
