<script lang="ts">
	import { Computer, Contact, InfoIcon, LayoutDashboard, Package, type Icon } from 'lucide-svelte';

	type MenuTypes = {
		name: string;
		href: string;
		icon: typeof Icon;
	};

	const menu: MenuTypes[] = [
		{
			name: 'Dashboard',
			href: '/dashboard',
			icon: LayoutDashboard
		},

		{
			name: 'Point of Sales',
			href: '/pos',
			icon: Computer
		},

		{
			name: 'Inventory',
			href: '/inventory',
			icon: Package
		}
	];
</script>

<aside class="fixed bottom-1 left-1 top-1 flex w-12 flex-col rounded-md bg-gray-800 text-white">
	<div>
		<header>Header Icon here</header>
	</div>
	<div class="flex flex-grow flex-col items-center gap-2 p-2">
		{#each menu as item, i}
			{@const Icon = item.icon}
			<div>
				<a href={item.href}>
					<Icon class="h-5 w-5" />
					<span class="sr-only">{item.name}</span>
				</a>
			</div>
		{/each}
	</div>
	<div>
		<footer>Footer heere</footer>
	</div>
</aside>
