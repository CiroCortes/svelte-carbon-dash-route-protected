<script lang="ts">
	import 'carbon-components-svelte/css/g80.css';

	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SkipToContent,
		Content,
		Button,		
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;
</script>

<Header persistentHamburgerMenu={true} company="XX" platformName="DashBoard" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>

	<HeaderNav>
		<HeaderNavItem href="/protected/dash" text="Reports" />
		<HeaderNavItem href="/protected/list" text="List" />
		<HeaderNavItem href="/protected/agents" text="Active-Agents" />
		<HeaderNavMenu text="Settings">
			<HeaderNavItem href="/protected/users" text="Users" />
			<HeaderNavItem href="/protected/phones" text="Phones" />
			<form action="/logout" method="POST">
				<Button expressive kind="ghost" size="small" type="submit">Logout</Button>
			</form>
		</HeaderNavMenu>
	</HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink
			href="/protected/dash"
			text="Reports"
			on:click={() => {
				isSideNavOpen = false;
			}}
		/>
		<SideNavLink
			href="/protected/list"
			text="List"
			on:click={() => {
				isSideNavOpen = false;
			}}
		/>
		<SideNavLink
			href="/protected/agents"
			text="agents"
			on:click={() => {
				isSideNavOpen = false;
			}}
		/>
		<SideNavMenu text="Settings">
			<SideNavMenuItem
				href="/protected/users"
				text="Users"
				on:click={() => {
					isSideNavOpen = false;
				}}
			/>
			<SideNavMenuItem
				href="/protected/phones"
				text="Phones"
				on:click={() => {
					isSideNavOpen = false;
				}}
			/>

			<form action="/logout" method="POST">
				<Button expressive kind="ghost" size="small" type="submit">Logout</Button>
			</form>
		</SideNavMenu>
	</SideNavItems>
</SideNav>

<Content />
