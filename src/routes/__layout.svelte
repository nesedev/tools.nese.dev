<script lang="ts">
  import '../app.scss';
  import Nav from '$lib/components/nav/nav.svelte';
  import Gdpr from '$lib/components/gdpr.svelte';
  import { menuShown } from '$lib/stores';
  import { onDestroy, onMount } from 'svelte';

  let isMobile: boolean;
  let mobileMq: MediaQueryList;
  const mobileMqHandler = (e: MediaQueryListEvent) => {
    isMobile = e.matches;
  };

  let mainContainer: HTMLElement;
  const mainClickHandler = () => {
    if (isMobile) $menuShown = false;
  };

  onMount(() => {
    mobileMq = window.matchMedia('screen and (max-width: 50rem)');
    mobileMq.addEventListener('change', mobileMqHandler);

    isMobile = mobileMq.matches;
    mainContainer.addEventListener('click', mainClickHandler);
  });

  onDestroy(() => {
    mainContainer?.removeEventListener('click', mainClickHandler);
    mobileMq?.removeEventListener('change', mobileMqHandler);
  });
</script>

<div class="app">
  <div bind:this={mainContainer} class="main-container" class:navHidden={!$menuShown}>
    <main>
      <slot />
    </main>
  </div>
  <Nav />
  <Gdpr />
</div>

<style lang="scss">
  .app {
    height: 100%;
    width: 100vw;
    overflow: hidden auto;
  }

  .main-container {
    display: flex;
    padding-left: 15rem;
    height: 100%;

    &.navHidden {
      padding-left: 0;
      justify-content: center;
    }
  }

  main {
    width: 100%;
    height: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 50rem) {
    .main-container {
      padding: 0;
      max-width: 100%;
    }
  }

  @media only screen and (min-width: 100rem) {
    .main-container {
      padding: 0;
      width: 100vw;
      justify-content: center;
    }
  }

  // @media only screen and (min-width: 768px) {
  //   main {
  //     margin: 0 15em;
  //   }
  // }
</style>
