<script lang="ts">
   import Spinner from '$lib/components/ui/polish/spinner/Spinner.svelte';
   import { loadSvx } from '$lib/loadSvx';
   import { fade } from 'svelte/transition';

   export let slug: string;
   let contentVisible = false;
</script>

{#await loadSvx(slug)}
   <div
      class="grid justify-center grid-rows-1 m-8"
      transition:fade
      on:outroend={() => (contentVisible = true)}
   >
      <Spinner />
   </div>
{:then svx}
   {#if contentVisible}
      <div class="flex flex-col items-center flex-grow w-full" transition:fade>
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
         @apply flex flex-col flex-grow mb-[-6rem] pb-[7rem] max-w-[64ch] w-[100%] bg-background-950 border-accent border-2 px-8;

         h1 {
            @apply py-4 my-4 first:mt-0;
         }

         .toc {
            @apply px-4 py-4 rounded-3xl border-[2px] bg-gradient-to-t from-accent/50 to-background-900/50  border-accent/70;
         }

         .toc::before {
            content: 'Table of Contents';
            @apply text-xl font-extrabold;
         }

         ol {
            @apply text-primary list-inside list-none;
         }

         .toc-item {
            @apply border-b-2 border-accent pt-4 pb-5 text-justify;
            line-height: 100%;
         }

         .toc-link {
            @apply underline hover:bg-primary hover:text-black hover:rounded-sm;
         }

         .toc-item::before {
            content: '>';
            @apply me-2 text-white font-extralight no-underline;
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
