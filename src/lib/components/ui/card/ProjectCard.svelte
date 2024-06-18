<script lang="ts">
   import type { Post } from '$lib/model';

   export let post: Post;
</script>

<a
   href="/projects/{post.slug}"
   class="flex flex-col gap-y-2 rounded-xl border-[2px] border-accent/75 bg-gradient-to-b from-background-800 via-background-800 via-40% to-background-500 px-4 py-4 shadow-[0px_0px_12px_12px_rgba(0,0,0,0.3)] shadow-black/50 transition-all duration-300 hover:shadow-white/20 [&_h1]:hover:text-xl [&_iconify-icon]:hover:text-4xl [&_iconify-icon]:hover:text-primary [&_p]:hover:text-sm"
>
   <div class="flex h-64 flex-col">
      {#if post.youtubeURL != undefined}
         <iframe
            class="flex flex-grow"
            src="https://www.youtube-nocookie.com/embed/oIzACzUwmVM?si=xU_cO-6pQfrxR2pp&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
         ></iframe>
      {:else}
         <div
            class="flex flex-grow"
            style="background-image:url(/headers/{post.slug}.png); background-size: cover"
         ></div>
      {/if}

      <div class="bottom-0 grid min-h-[3lh] grid-cols-5 bg-black/50 p-2">
         <div class="col-span-4">
            <h1>{post.title}</h1>
            <p>{post.description}</p>
         </div>
         <iconify-icon
            class="flex flex-grow items-center text-3xl text-primary/50 transition-all duration-200"
            icon="iconamoon:arrow-right-6-circle"
         ></iconify-icon>
      </div>
   </div>
</a>

<style>
   h1 {
      @apply text-lg text-primary transition-all duration-200;
   }
   p {
      @apply text-xs transition-all duration-200;
   }
</style>
