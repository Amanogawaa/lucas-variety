<script lang="ts">
	import { type ProductsType } from '$lib/types/products';
	import * as Card from '$lib/components/ui/card';
	import { Button, buttonVariants } from '../ui/button';

	let { products }: { products: ProductsType[] } = $props();
</script>

<!-- 
	? The Products component is a child component of the POS page.
	? It receives the products array as a prop and renders each product as a card.
	TODO: add function for adding and removing products from the batch
-->

<div class="grid grid-cols-3 gap-2.5 rounded-lg max-sm:grid-cols-2">
	{#each products as product}
		<Card.Root class="bg-custom-secondary max-w-md border-none  text-white shadow-md">
			<Card.Content>
				<img
					src={product.image}
					alt={product.name}
					class="mb-4 h-56 w-full rounded-md object-cover"
				/>

				<div class="mt-3 flex w-full flex-col items-start justify-between gap-1.5">
					<h1 class="mb-1 text-sm font-medium">{product.name}</h1>
					<div class="mb-3 text-sm font-bold">{`₱ ${product.price}`}</div>
				</div>

				<div class="mb-4 flex items-center justify-between">
					<button class="rounded px-2 py-1 text-lg font-bold hover:border-gray-400"> - </button>
					<div class="rounded-md border border-gray-400 px-4 py-1">
						<input
							type="number"
							class="w-16 border-none bg-transparent text-center text-lg font-semibold outline-none"
						/>
					</div>
					<button class="rounded px-2 py-1 text-lg font-bold hover:border-gray-400"> + </button>
				</div>

				<Button
					class=" h-10 w-full rounded-full bg-white font-semibold text-black hover:bg-white/90"
				>
					Add to Batch
				</Button>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
