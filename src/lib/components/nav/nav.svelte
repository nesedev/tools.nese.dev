<script>
  import { base } from '$app/paths';
  import NavItem from './nav-item.svelte';
  import NavGroup from './nav-group.svelte';
</script>

<nav>
  <a href="{base}/" class="nav-header">
    <img src="{base}/assets/logo.png" alt="logo" />
  </a>
  <NavGroup title="General">
    <NavItem name="Home" icon="home" route="/" />
  </NavGroup>
  <NavGroup title="Tools">
    <NavItem name="Test" icon="home" route="/test" />
  </NavGroup>
</nav>

<style lang="scss" scoped>
  nav {
    background: var(--secondary-bg);
    overflow-x: hidden;
    scrollbar-width: thin;
    user-select: none;
  }

  .nav-header {
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    margin: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.1s;
    background: var(--gray-4);

    img {
      height: 4rem;
    }
  }
</style>
