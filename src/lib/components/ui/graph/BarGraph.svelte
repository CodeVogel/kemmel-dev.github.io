<script lang="ts">
   import { onMount } from 'svelte';

   // Create type for BarGraph
   interface Bar {
      label: string;
      percentage: number;
   }

   export let name: string = 'Sample BarGraph';
   export let data: Bar[] = [];

   let in_view: boolean = false;

   onMount(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               in_view = true;
               observer.disconnect();
            }
         });
      });
      const barRow = document.getElementById('bar-row');
      if (barRow) observer.observe(barRow);
   });
</script>

<div class="flex flex-col items-center px-8">
   <h3 class="text-center">{name}</h3>

   <div
      id="bar-row"
      class="grid h-64 auto-cols-min grid-flow-col-dense items-end gap-x-4 px-4 pt-4"
   >
      {#each data as bar, i}
         <bar
            class="w-16 rounded-t-lg bg-primary transition-all duration-[1200ms]"
            style="height: calc(100% * {in_view
               ? bar.percentage
               : 0}); transition-delay: calc({300 + i * 500}ms)"
         ></bar>
      {/each}
   </div>
   <div class="grid auto-cols-min grid-flow-col-dense gap-x-4 px-4 text-center">
      {#each data as bar}
         <span class="text-s w-16">{bar.label}</span>
      {/each}
   </div>
</div>
