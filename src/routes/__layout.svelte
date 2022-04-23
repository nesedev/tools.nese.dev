<script>
  import '../app.scss';

  import Nav from '$lib/components/nav/nav.svelte';
  import Gdpr from '$lib/components/gdpr.svelte';
</script>

<div class="app">
  <div class="main-container">
    <main>
      <slot />
    </main>
  </div>
  <Nav />
  <Gdpr />
</div>

<style lang="scss">
  .app {
    height: 100vh;
    width: 100vw;
    overflow: hidden auto;
  }

  .main-container {
    display: flex;
    padding-left: 15rem;
    height: 100vh;
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
