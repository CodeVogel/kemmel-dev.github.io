<script lang="ts">
	import { loadSvx } from '$lib/loadSvx';
	import { fade } from 'svelte/transition';
	import Spinner from '$lib/components/ui/polish/spinner/Spinner.svelte';
	import ErrorRenderer from './ErrorRenderer.svelte';

	export let contentVisible: boolean;
	export let slug: string;
	export let frontMatter: any;

	const promise = loadSvx(slug).then((result) => {
		frontMatter = result.meta;
		return result;
	});
</script>

{#await promise}
	<div
		transition:fade
		on:outroend={() => {
			contentVisible = true;
		}}
	>
		<Spinner></Spinner>
	</div>
{:then svx}
	{#if contentVisible}
		<div class="post-container" transition:fade>
			<svelte:component this={svx.content} />
		</div>
	{/if}
{:catch error}
	{#if contentVisible}
		<div transition:fade>
			<ErrorRenderer {error} />
		</div>
	{/if}
{/await}

<style lang="scss">
	:global {
		.post-container {
			.toc {
				@apply justify-self-center px-8 py-4 rounded-3xl text-accent bg-primary border-black border-double border-[5px] my-4;
			}

			.toc::before {
				content: 'Table of Contents';
				@apply text-xl font-extrabold;
			}

			.toc ol {
				@apply list-decimal;
			}

			.toc .toc-item::before {
			}

			.shiki {
				@apply overflow-x-scroll;
			}

			code {
				counter-reset: step;
				counter-increment: step calc(var(--start, 1) - 1);

				.line::before {
					content: counter(step);
					counter-increment: step;
					width: 1rem;
					margin-right: 1.5rem;
					display: inline-block;
					text-align: right;
					color: rgba(115, 138, 148, 0.4);
				}
			}
		}
	}
</style>
