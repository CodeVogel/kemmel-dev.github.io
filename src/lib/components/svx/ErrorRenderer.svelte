<script lang="ts">
   import { onMount } from 'svelte';

   export let error: { status: number; message: string };

   let birdX = 0;
   const birdXStart = -200;
   const birdYOffset = 25;
   const birdSpeed = 5;
   let birdY = 0;
   let birdVisible = true;

   let width: number;

   onMount(() => {
      birdX = birdXStart;
      birdY = birdYOffset;
      birdVisible = true;
      const interval = setInterval(() => {
         birdX += birdSpeed;
         birdY = birdYOffset + Math.sin(birdX / 30) * 15;
         if (birdX > width) {
            clearInterval(interval);
            birdVisible = false;
         }
      }, 10);
   });
</script>

<div class="relative overflow-clip" bind:clientWidth={width}>
   <span
      class="absolute text-6xl"
      style="display:{birdVisible ? '' : 'none'}; right:{birdX}px; top:{birdY}px">🐦</span
   >
   <h1>Whoops!</h1>
   <h2>A bird flew off with our data!</h2>
   <p>
      <span class="text-xl font-bold">Error <span class="text-primary">{error.status}</span>:</span>
      {error.message}
   </p>
</div>
