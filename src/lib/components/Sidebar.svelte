<script lang="ts">
	import { AppWindow, Computer, LayoutDashboard, LogOut, Package, type Icon } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Tooltip from '$lib/components/ui/tooltip';

	type MenuTypes = {
		name: string;
		href: string;
		icon: typeof Icon;
	};

	const menu: MenuTypes[] = [
		{
			name: 'Point of Sales',
			href: '/pos',
			icon: Computer
		},

		{
			name: 'Dashboard',
			href: '/admin/dashboard',
			icon: LayoutDashboard
		},

		{
			name: 'Inventory',
			href: '/admin/inventory',
			icon: Package
		}
	];
</script>

<aside
	class="bg-custom-secondary fixed bottom-1 left-1 top-1.5 flex w-12 flex-col rounded-md text-white"
>
	<div class="flex flex-col items-center gap-2 p-2">
		<header>
			<!-- <img src="" alt=""> -->

			<AppWindow />
		</header>
	</div>

	<div class="px-1">
		<Separator />
	</div>

	<div class="flex flex-grow flex-col items-center gap-4 p-4">
		{#each menu as item, i}
			{@const Icon = item.icon}
			<Tooltip.Root>
				<Tooltip.Trigger>
					<a href={item.href}>
						<Icon class="h-5 w-5 " />
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">{item.name}</Tooltip.Content>
			</Tooltip.Root>
		{/each}
	</div>
	<div class="flex flex-col items-center gap-2 p-2 pb-4">
		<a href="/logout">
			<LogOut class="h-4 w-4 " />
		</a>
	</div>
</aside>
