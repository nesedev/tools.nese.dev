<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  export let icon: string;
  export let name: string;
  export let route: string;
</script>

<a href="{base}{route}" class="nav-item" class:active={$page.url.pathname === route}>
  <span class="nav-icon material-icons-outlined">{icon}</span>{name}
</a>

<style lang="scss" scoped>
  .nav-item {
    display: block;
    border-radius: 0.5rem;
    margin: 0.25rem 0;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.1s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    color: inherit;

    .material-icons-outlined {
      font-family: 'Material Icons Outlined';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      font-feature-settings: 'liga';
      -moz-font-feature-settings: 'liga';
      -moz-osx-font-smoothing: grayscale;
    }

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
    }
  }
</style>
