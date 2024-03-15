<script lang="ts">
	export let href: string,
		name: string,
		hovered: boolean = false;
</script>

<!-- Ignore accessibility warning here as these events only 
	trigger visual effects that don't change the layout -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<a
	{href}
	class="flex items-center h-full px-8 hover:bg-accent"
	on:mouseover={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	{name}
</a>
