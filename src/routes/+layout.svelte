<script lang="ts">
	import '../app.css';
	import Sidebar from '$lib/components/Sidebar.svelte';

	// define routes here

	let { children } = $props();
</script>

<main>
	<Sidebar />
	{@render children()}
</main>
