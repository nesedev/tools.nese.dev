<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  export let icon: string;
  export let name: string;
  export let route: string;
  export let hidden: boolean = false;
</script>

{#if !hidden}
  <a href="{base}{route}" class="nav-item" class:active={$page.url.pathname === base + route}>
    <span class="nav-icon material-icons-outlined">{icon}</span>{name}
  </a>
{/if}

<style lang="scss">
  .nav-item {
    display: block;
    border-radius: 0.5rem;
    margin: 0.25rem 0;
    padding: 0.5rem;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: inherit;

    &:hover {
      background: var(--gray-4);
    }

    &.active {
      background: rgba(0, 127, 255, 0.2);
    }

    .nav-icon {
      color: rgb(0, 127, 255);
      margin-right: 0.5rem;
      vertical-align: sub;
      width: 1em;
    }
  }
</style>
