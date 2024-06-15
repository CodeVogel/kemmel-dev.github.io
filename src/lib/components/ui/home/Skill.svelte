<script lang="ts">
   import IconBox from '$lib/components/ui/icons/IconBox.svelte';

   export let skill: Skill | undefined = undefined;
</script>

<IconBox {skill} />
