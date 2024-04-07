<div class="flex flex-col items-center">
	<div class="grid grid-cols-1 max-w-[64ch] w-[100%] post-container">
		<slot />
	</div>
</div>

<style lang="scss">
	:global {
		.post-container {
			@apply px-8 pb-[8rem] mb-[-6rem] bg-background-950 border-s-4 border-e-4 border-accent;

			h1 {
				@apply py-4 my-4 first:mt-0;
			}

			.toc {
				@apply px-4 py-4 rounded-3xl border-[2px] bg-gradient-to-t from-accent/50 to-background-900/50  border-accent/70;
			}

			.toc::before {
				content: 'Table of Contents';
				@apply text-xl font-extrabold;
			}

			ol {
				@apply text-primary list-inside list-none;
			}

			.toc-item {
				@apply border-b-2 border-accent pt-4 pb-5 text-justify;
				line-height: 100%;
			}

			.toc-link {
				@apply underline hover:bg-primary hover:text-black hover:rounded-sm;
			}

			.toc-item::before {
				content: '>';
				@apply me-2 text-white font-extralight no-underline;
			}

			.toc-item:last-child {
				@apply border-b-0;
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
