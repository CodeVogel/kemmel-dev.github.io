<script lang="ts">
   import ClipSvg from '$lib/components/ui/icons/ClipSvg.svelte';

   export let path: string;
   export let link: string;
   let className: string = '';

   export { className as class };
</script>

<a class="w-12 {className} [&_div]:hover:bg-primary" href={link}>
   <ClipSvg {path} class="aspect-square bg-white" />
</a>
