<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';
	let { children } = $props();

	// define routes here
</script>

<main>
	<Sidebar />

	<article class="h-screen w-full py-1 pr-2.5 sm:pl-16">
		{@render children()}
	</article>
</main>
