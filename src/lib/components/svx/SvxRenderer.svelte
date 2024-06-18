<script lang="ts">
   import Spinner from '$lib/components/ui/polish/spinner/Spinner.svelte';
   import { loadSvx } from '$lib/loadSvx';
   import { fade } from 'svelte/transition';

   export let slug: string;
   let contentVisible = false;
</script>

{#await loadSvx(slug)}
   <div
      class="m-8 grid grid-rows-1 justify-center"
      transition:fade
      on:outroend={() => (contentVisible = true)}
   >
      <Spinner />
   </div>
{:then svx}
   {#if contentVisible}
      <div class="flex w-full flex-grow flex-col items-center" transition:fade>
         <div class="post-container">
            <h1>{svx.meta.title}</h1>
            <svelte:component this={svx.content} />
         </div>
      </div>
   {/if}
{/await}

<style lang="scss">
   :global {
      .post-container {
         @apply mb-[-6rem] flex w-[100%] max-w-[64ch] flex-grow flex-col border-2 border-accent bg-background-950 px-8 pb-[7rem];

         h1 {
            @apply my-4 py-4 first:mt-0;
         }

         .toc {
            @apply max-w-64 rounded-3xl border-[2px] border-accent/70 bg-gradient-to-t from-accent/50 to-background-900/50 px-4 py-4;
         }

         .toc::before {
            content: 'Table of Contents';
            @apply text-xl font-extrabold;
         }

         ol {
            @apply list-inside list-none text-primary;
         }

         .toc-item {
            @apply border-b-2 border-accent pb-5 pt-4 text-justify;
            line-height: 100%;
         }

         .toc-link {
            @apply underline hover:rounded-sm hover:bg-primary hover:text-black;
         }

         .toc-item::before {
            content: '>';
            @apply me-2 font-extralight text-white no-underline;
         }

         .toc-item:last-child {
            @apply border-b-0;
         }

         .shiki {
            @apply overflow-x-scroll;
         }

         code {
            counter-reset: step;
            counter-increment: step calc(var(--start, 1) - 1);

            .line::before {
               content: counter(step);
               counter-increment: step;
               width: 1rem;
               margin-right: 1.5rem;
               display: inline-block;
               text-align: right;
               color: rgba(115, 138, 148, 0.4);
            }
         }
      }
   }
</style>
