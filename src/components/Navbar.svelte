<script>
    import "carbon-components-svelte/css/g80.css";
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
      Grid,
      Row,
      Column,
    } from "carbon-components-svelte";
  
    let isSideNavOpen = false;

    
  </script>
  
  <Header
    persistentHamburgerMenu={true}
    company="XX"
    platformName="DashBoard"
    bind:isSideNavOpen
  >
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="Reports" />
      <HeaderNavItem href="/list" text="List" />
      <HeaderNavItem href="/agents" text="Active-Agents" />
      <HeaderNavMenu text="Settings">
        <HeaderNavItem href="/users" text="Users" />
        <HeaderNavItem href="/phones" text="Phones" />
        <HeaderNavItem href="/" text="Login/Logout" />
      </HeaderNavMenu>
    </HeaderNav>
  </Header>
  
  <SideNav bind:isOpen={isSideNavOpen}>
    <SideNavItems>
      <SideNavLink href="/" text="Reports" on:click={()=>{isSideNavOpen=false}}/>
      <SideNavLink href="/list" text="List" on:click={()=>{isSideNavOpen=false}}/>
      <SideNavLink href="/agents" text="agents" on:click={()=>{isSideNavOpen=false}} />
      <SideNavMenu text="Settings">
        <SideNavMenuItem href="/users" text="Users" on:click={()=>{isSideNavOpen=false}}/>
        <SideNavMenuItem href="/phones" text="Phones" on:click={()=>{isSideNavOpen=false}}/>
        <SideNavMenuItem href="/" text="Login/Logout" />
      </SideNavMenu>
    </SideNavItems>
  </SideNav>
  <Content>
    

  </Content>
  