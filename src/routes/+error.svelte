<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { goto } from '$app/navigation';
	// export let error;
</script>

<main>
	<main class="flex h-screen w-full flex-col items-center justify-center">
		<h1 class="text-9xl font-extrabold tracking-normal text-black">404</h1>
		<Tooltip.Root>
			<Tooltip.Trigger
				class="absolute rotate-12 rounded bg-[#fbdb06] px-2 text-sm font-bold text-black"
			>
				Page Not Found
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p class="w-60 whitespace-nowrap text-wrap bg-white p-5 text-justify text-black">
					Let's be honest though -- 99% of the time, the 404 page is the fault of the person who
					made the website. We probably broke a link somewhere when working on a page.
				</p>
			</Tooltip.Content>
		</Tooltip.Root>

		<button
			onclick={() => {
				goto('/');
				console.log(document.referrer);
			}}
			class="group relative inline-block text-sm font-medium text-[#fbdb06] focus:outline-none focus:ring active:text-yellow-700"
		>
			<span
				class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#fbdb06] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
			></span>
			<span class="relative block border border-current bg-gray-50 px-8 py-3"> Go Home </span>
		</button>
	</main>
</main>
