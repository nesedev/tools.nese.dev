<script lang="ts">
  export let title: string;
  export let hidden: boolean = false;
</script>

{#if !hidden}
  <div class="nav-group">
    <span class="nav-title">{title}</span>
    <slot />
  </div>
{/if}

<style lang="scss">
  .nav-group {
    margin: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;

    .nav-title {
      text-transform: uppercase;
      font-size: 0.5rem;
      font-weight: bold;
      display: inline-block;
      line-height: 1;
    }
  }
</style>
