<script lang="ts">
	let className: string;
	export let path: string;
	export { className as class };
</script>

<div class={className} style="mask:url({path}) no-repeat center">
	<img src={path} class="opacity-0 aspect-square" width="100vh" height="100vh" />
</div>
