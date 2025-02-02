<script lang="ts">
	import Button from '../ui/button/button.svelte';
</script>

<!-- 
    ? Checkout_Panel.svelte is a component that will be used to display the checkout panel.
	* This component will be used to display the list of items that the user has selected to purchase.
	TODO: Add dialog for confirmation of payment
	? height of item list is not final, need some thinking on what is the best height for the item list 
-->

<div class="fixed bottom-0 right-0 top-0 flex h-full w-[27.5%] flex-col p-2.5">
	<div class="w-full">
		<h1 class="text-md mb-1 font-bold text-white">Item List</h1>
		<div class="scrollbar-hide flex max-h-[336px] flex-col gap-1 overflow-auto">
			{#each { length: 7 }}
				<div
					class="bg-custom-secondary flex h-auto min-h-14 items-center gap-2 rounded-md p-3.5 text-white"
				>
					<p class="text-sm font-medium leading-none">Product Name</p>
					<p class="text-sm text-muted-foreground">(Quantity)</p>
				</div>
			{/each}
		</div>
	</div>

	<!-- total div -->
	<div class="bg-custom-secondary mt-2 flex w-full flex-1 flex-col rounded-md p-4">
		<div class="flex-grow">
			<div class="flex w-full items-center justify-between">
				<p class="text-md font-bold text-white">Quantity:</p>
				<p class="text-md font-bold text-white">₱ 0.00</p>
			</div>
			<div class="flex w-full items-center justify-between">
				<p class="text-md font-bold text-white">Sub Total:</p>
				<p class="text-md font-bold text-white">₱ 0.00</p>
			</div>
			<div class="flex w-full items-center justify-between">
				<p class="text-md font-bold text-white">Total Payments:</p>
				<p class="text-md font-bold text-white">₱ 0.00</p>
			</div>
		</div>

		<Button class="rounded-full bg-white text-black hover:bg-white/90 ">Confirm Payment</Button>
	</div>
</div>
