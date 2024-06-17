<script lang="ts">
   import IconBox from '$lib/components/ui/icons/IconBox.svelte';
   import type { LinkIcon } from '$lib/model';
   import socials from '$lib/data/socials.json';

   const linkIcons: LinkIcon[] = [];
   linkIcons.push(socials.github);
   linkIcons.push(socials.linkedIn);
</script>

<div class="flex justify-center">
   <div class="m-8 flex max-w-[30ch] flex-col items-center">
      <h1>Contact</h1>
      <div class="my-8 flex flex-col">
         <div>
            I am currently <strong class="text-primary">open to work</strong>.
         </div>
         <div>Are you interested in working together?</div>
         <div>Then I would love to hear from you!<br /> Don't hesitate to contact me at:</div>
         <span class="my-4 rounded-lg bg-primary px-4 pb-3 pt-2 text-xl font-extrabold text-black"
            >contact<span class="hidden">primitive-spam-protection</span>@codevogel.com</span
         >
         <div>Other inquiries, such as questions about one of my projects, are also welcome!</div>
      </div>

      <h3 class="mb-4 italic text-white/50">You can also find me on...</h3>
      <IconBox icons={linkIcons}></IconBox>
   </div>
</div>
