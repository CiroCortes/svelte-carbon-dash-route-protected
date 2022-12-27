<script>
	import {
		FluidForm,
		TextInput,
		PasswordInput,
		Button,
		AspectRatio
	} from 'carbon-components-svelte';

	let username = '';
	let password = '';
</script>

<AspectRatio ratio="16x9">
	<FluidForm class="formulario-login" action="?/login" method="POST">
		<TextInput
			labelText="User name"
			placeholder="Enter user name..."
			required
			bind:value={username}
		/>
		<PasswordInput
			required
			type="password"
			labelText="Password"
			placeholder="Enter password..."
			bind:value={password}
		/>
		<Button type="submit">Continue</Button>
	</FluidForm>
</AspectRatio>
