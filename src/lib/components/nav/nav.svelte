<script lang="ts">
  import { base } from '$app/paths';
  import NavItem from './nav-item.svelte';
  import NavGroup from './nav-group.svelte';
  import { betaMode, isMobile, menuShown } from '$lib/stores';
  import { onDestroy, onMount } from 'svelte';

  const touchStart = { x: 0, y: 0 };
  const touchEnd = { x: 0, y: 0 };

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.changedTouches[0];
    touchStart.x = touch.screenX;
    touchStart.y = touch.screenY;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touch = e.changedTouches[0];
    touchEnd.x = touch.screenX;
    touchEnd.y = touch.screenY;
    handleGesture();
  };

  function handleGesture() {
    const xDistance = touchEnd.x - touchStart.x;
    const yDistance = touchEnd.y - touchStart.y;

    if (Math.abs(xDistance) > Math.abs(yDistance)) {
      if (xDistance > 0) {
        // swiped right
        $menuShown = true;
      } else {
        // swiped left
        $menuShown = false;
      }
    }
  }

  let body: HTMLElement;

  onMount(() => {
    body = document.body;

    body.addEventListener('touchstart', handleTouchStart);
    body.addEventListener('touchend', handleTouchEnd);
  });

  onDestroy(() => {
    body?.removeEventListener('touchstart', handleTouchStart);
    body?.removeEventListener('touchend', handleTouchEnd);
  });
</script>

<nav class:hidden={!$menuShown}>
  <a href="{base}/" class="nav-header">
    <img src="{base}/assets/logo.png" alt="logo" />
  </a>
  <NavGroup title="General">
    <NavItem name="Home" icon="home" route="/" />
  </NavGroup>
  <NavGroup title="Minecraft" hidden={!$betaMode}>
    <NavItem name="Modrinth Manager" icon="view_in_ar_new" route="/modrinth-manager" />
  </NavGroup>
  <NavGroup title="Miscellaneous">
    <NavItem name="Discord April Fools" icon="theater_comedy" route="/discord-april-fools" />
  </NavGroup>
</nav>
<button class="nav-toggle" on:click={() => ($menuShown = !$menuShown)}>
  <span class="icon material-icons-outlined">menu</span>
</button>

<style lang="scss">
  nav {
    background: var(--secondary-bg);
    overflow-x: hidden;
    scrollbar-width: thin;
    user-select: none;
    width: 15rem;
    height: 100%;
    flex-shrink: 0;
    position: relative;
    transition: 0.5s;
    position: fixed;
    top: 0;
    left: 0;

    &.hidden {
      // width: 5rem;
      opacity: 0;
      transform: translateX(-15rem);
    }
  }

  .nav-toggle {
    position: fixed;
    top: 0;
    left: 0;
    // right: 0;
    margin: 1em;
    background: var(--gray-4);
    padding: 0.25rem;

    .icon {
      vertical-align: sub;
      width: 1em;
    }
  }

  .nav-header {
    display: flex;
    justify-content: center;
    border-radius: 0.5rem;
    margin: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    background: var(--gray-4);

    img {
      height: 4rem;
    }
  }
</style>
