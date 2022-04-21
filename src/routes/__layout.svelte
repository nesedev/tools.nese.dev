<script>
  import '../app.scss';

  import Nav from '$lib/components/nav/nav.svelte';
</script>

<Nav />

<main>
  <slot />
</main>

<style lang="scss" scoped>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
