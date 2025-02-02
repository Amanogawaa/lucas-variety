<script lang="ts">
	import { SearchIcon } from 'lucide-svelte';
</script>

<!-- 
    ? This is a search component that will be used to search for products in the POS system.
    TODO: Implement the search functionality.
    TODO: Fix icon cause its not showing up (done)

-->

<div class="relative flex-1 pt-2 text-gray-600 md:grow-0">
	<input
		class="bg-custom-secondary h-10 w-full rounded-full pl-8 md:w-[200px] lg:w-[336px]"
		type="search"
		name="search"
		placeholder="Search"
	/>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button type="submit" class="absolute right-0 top-0 z-50 mr-4 mt-5">
		<SearchIcon class="h-4 w-4  text-gray-600" />
	</button>
</div>
