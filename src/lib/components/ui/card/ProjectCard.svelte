<script lang="ts">
   import type { Post } from '$lib/model';

   export let post: Post;
</script>

<a
   href="/projects/{post.slug}"
   class="flex flex-col gap-y-2 rounded-xl border-[2px] border-accent/75 bg-gradient-to-b from-background-800 via-background-800 via-40% to-background-500 px-4 py-4 shadow-[0px_0px_12px_12px_rgba(0,0,0,0.3)] shadow-black/50 transition-all duration-300 hover:shadow-white/20 [&_h1]:hover:text-xl [&_iconify-icon]:hover:text-4xl [&_iconify-icon]:hover:text-primary [&_p]:hover:text-sm"
>
   <div
      class="flex h-48 flex-grow flex-col bg-cover bg-center"
      style="background-image:url(/headers/{post.slug}.png)"
   >
      <div class="mb-0 mt-auto grid grid-cols-5 bg-black/50 p-2">
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
