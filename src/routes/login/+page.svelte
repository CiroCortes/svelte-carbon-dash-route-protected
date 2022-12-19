<script>
	import { FluidForm, TextInput, PasswordInput, Button } from 'carbon-components-svelte';
	import { navigate } from 'svelte-routing';

	import { user } from '../stores/store';

	let username = '';
	let password = '';

	if (!username.trim() || !password.trim()) {
		console.log('campos vacios');
	}

	const handleLogin = () => {
		user.setUser({
			username,
			password
		});

		console.log('ok');
		console.log($user);
		navigate('/',{replace:true});
	};
</script>

<FluidForm on:submit={handleLogin}>
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
