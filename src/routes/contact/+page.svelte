<script lang="ts">
   import Socials from '$lib/components/ui/home/Socials.svelte';
   import LinkIcon from '$lib/components/ui/icons/LinkIcon.svelte';
</script>

<div class="flex justify-center">
   <div class="m-8 flex max-w-[30ch] flex-col items-center gap-y-4">
      <h1>Contact</h1>
      <div class="flex flex-col">
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

      <Socials />
      <div class="flex flex-col items-center gap-y-4">
         <h2>View my resume</h2>
         <LinkIcon path="/icons/resume.svg" link="/pdf/resume-kamiel-de-visser.pdf" />
      </div>
   </div>
</div>
