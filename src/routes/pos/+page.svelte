<script lang="ts">
	import CheckoutPanel from '$lib/components/pos_components/Checkout_Panel.svelte';
	import Products from '$lib/components/pos_components/Products.svelte';
	import Search from '$lib/components/pos_components/Search.svelte';
	import { type ProductsType } from '$lib/types/products';

	let products: ProductsType[] = $state([]);

	products = [
		{
			id: 1,
			name: 'Wireless Mouse',
			price: 25.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 2,
			name: 'Mechanical Keyboard',
			price: 79.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 3,
			name: 'USB-C Hub',
			price: 39.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 4,
			name: 'Gaming Headset',
			price: 59.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 5,
			name: 'Portable SSD 1TB',
			price: 129.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 6,
			name: '4K Monitor',
			price: 299.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 7,
			name: 'Bluetooth Speaker',
			price: 45.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 8,
			name: 'Smartwatch',
			price: 199.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 9,
			name: 'Wireless Charger',
			price: 29.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		},
		{
			id: 10,
			name: 'Laptop Stand',
			price: 34.99,
			image: 'https://via.placeholder.com/150',
			createdAt: new Date().toISOString()
		}
	];
</script>

<main class="flex h-screen w-full flex-col gap-1.5">
	<div class=" flex h-screen w-full gap-3.5">
		<div class="flex-1">
			<div class="mb-2 flex w-full items-center justify-end">
				<Search />
			</div>

			<Products {products} />
		</div>
		<div class="w-[27.5%]">
			<CheckoutPanel />
		</div>
	</div>
</main>
