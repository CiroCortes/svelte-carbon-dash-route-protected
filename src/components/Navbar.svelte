<script>
	import 'carbon-components-svelte/css/g80.css';
	import { user } from '../routes/stores/store';
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
		Content
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;
</script>
{#if $user}
<Header persistentHamburgerMenu={true} company="XX" platformName="DashBoard" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		 <SkipToContent /> 
	</svelte:fragment>
	{#if $user}
		<HeaderNav>
			<HeaderNavItem href="/" text="Reports" />
			<HeaderNavItem href="/list" text="List" />
			<HeaderNavItem href="/agents" text="Active-Agents" />
			<HeaderNavMenu text="Settings">
				<HeaderNavItem href="/users" text="Users" />
				<HeaderNavItem href="/phones" text="Phones" />
				<HeaderNavItem
					on:click={() => {
						user.setUser(null);
					}}
					href="/login"
					text="Logout"
				/>
			</HeaderNavMenu>
		</HeaderNav>
	{/if}
</Header>

{/if}
{#if $user}
	<SideNav bind:isOpen={isSideNavOpen}>
		<SideNavItems>
			<SideNavLink
				href="/"
				text="Reports"
				on:click={() => {
					isSideNavOpen = false;
				}}
			/>
			<SideNavLink
				href="/list"
				text="List"
				on:click={() => {
					isSideNavOpen = false;
				}}
			/>
			<SideNavLink
				href="/agents"
				text="agents"
				on:click={() => {
					isSideNavOpen = false;
				}}
			/>
			<SideNavMenu text="Settings">
				<SideNavMenuItem
					href="/users"
					text="Users"
					on:click={() => {
						isSideNavOpen = false;
					}}
				/>
				<SideNavMenuItem
					href="/phones"
					text="Phones"
					on:click={() => {
						isSideNavOpen = false;
					}}
				/>
				<SideNavMenuItem 
				on:click={() => {
					user.setUser(null);
				}} href="/login" text="Logout" />
			</SideNavMenu>
		</SideNavItems>
	</SideNav>
{/if}

<Content />
