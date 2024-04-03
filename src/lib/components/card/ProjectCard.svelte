<script lang="ts">
	import type { Post } from '$lib/model';

	export let post: Post;
</script>

<div
	class="p-6 border-[2px] border-accent bg-gradient-to-t from-background-600/25 to-background-100/25 rounded-xl"
>
	<a
		href="/projects/{post.slug}"
		class="flex flex-col px-4 py-4 gap-y-2 border-[2px] border-accent/75 bg-gradient-to-b from-background-800 via-40% via-background-800 to-background-500 rounded-xl shadow-[0px_0px_12px_12px_rgba(0,0,0,0.3)] shadow-black/50 hover:shadow-white/20 [&_h1]:hover:text-xl [&_iconify-icon]:hover:text-4xl [&_p]:hover:text-sm [&_iconify-icon]:hover:text-primary transition-all duration-300"
	>
		<div
			class="bg-[url(/headers/detective-duck.png)] bg-cover bg-center h-48 flex flex-col flex-grow"
		>
			<div class="grid grid-cols-5 p-2 mt-auto mb-0 bg-black/50">
				<div class="col-span-4">
					<h1>{post.title}</h1>
					<p>{post.description}</p>
				</div>
				<iconify-icon
					class="flex items-center flex-grow text-3xl transition-all duration-200 text-primary/50"
					icon="iconamoon:arrow-right-6-circle"
				></iconify-icon>
			</div>
		</div>
	</a>
</div>

<style>
	h1 {
		@apply text-lg text-primary transition-all duration-200;
	}
	p {
		@apply text-xs transition-all duration-200;
	}
</style>
