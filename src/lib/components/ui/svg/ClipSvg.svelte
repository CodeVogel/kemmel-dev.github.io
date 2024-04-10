<script lang="ts">
	let className: string;
	export let path: string;
	export { className as class };
</script>

<div class={className} style="mask:url({path}) no-repeat center"></div>
