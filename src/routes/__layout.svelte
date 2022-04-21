<script>
  import '../app.scss';

  import Nav from '$lib/components/nav/nav.svelte';
  import Gdpr from '$lib/components/gdpr.svelte';
</script>

<Nav />

<main>
  <slot />
</main>

<Gdpr />

<style lang="scss" scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
