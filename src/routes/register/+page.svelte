<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<main class="flex h-screen w-full items-center justify-center">
	<Card.Root class="mx-auto max-w-sm">
		<Card.Header>
			<Card.Title class="text-center text-2xl">Login</Card.Title>
			<Card.Description class="text-center"
				>Enter your email below to create your account</Card.Description
			>
		</Card.Header>
		<Card.Content>
			<div class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="m@example.com" required />
				</div>
				<div class="grid gap-2">
					<div class="flex items-center">
						<Label for="password">Password</Label>
					</div>
					<Input id="password" type="password" required />
				</div>
				<Button type="submit" class="w-full">Sign up</Button>
				<!-- <Button variant="outline" class="w-full">Login with Google</Button> -->
			</div>
			<div class="mt-4 text-center text-sm">
				Don&apos;t have an account?
				<a href="/login" class="underline">Sign in</a>
			</div>
		</Card.Content>
	</Card.Root>
</main>
