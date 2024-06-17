<script lang="ts">
   import AutoGrowTypeWriter from '$lib/components/ui/polish/typewriter/AutoGrowTypeWriter.svelte';
</script>

<div class="flex flex-col items-center">
   <div class="mt-8 min-h-[10lh] content-end">
      <div class="speech-bubble relative rounded-2xl bg-background-700">
         <AutoGrowTypeWriter
            class="min-w-[28ch] rounded-xl bg-inherit p-8 shadow-xl shadow-black/80"
            msDelayBetweenChars={20}
            msDelayBetweenElements={500}
            preRender={false}
         >
            <h1>Hi!</h1>
            <h2>
               <div class="max-w-[9ch] sm:max-w-full">
                  My name is
                  <span class="w-fit rounded-lg bg-primary px-1 font-bold text-black">
                     CodeVogel
                  </span>.
               </div>
            </h2>
            <div class="mt-2 font-extralight">
               I make <span class="font-semibold text-primary">games</span> and build
               <span class="font-semibold text-primary">software</span>.
            </div>
            <div class="font-extralight">
               Check out some of my
               <a href="/projects" class="font-bold text-primary underline"
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
      class="mt-12 w-[8rem] rounded-[100vw] shadow-[5px_6px_15px_2px_#000000aa]"
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
      bottom: -10px;
      left: 50%;
      width: 0;
      height: 0;
      border: 2em solid transparent;
      border-top-color: theme('colors.background.700');
      border-bottom: 0;
      border-left: 0;
      margin-left: -0.5em;
      margin-bottom: -1em;
      transform: scaleY(1.5);
   }
</style>
