<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = ({ status, url }) => {
    return {
      props: {
        url: new URL(url),
        status,
      },
    };
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import { base } from '$app/paths';

  export let url: URL;
  export let status: number;
</script>

{#if status == 404}
  <h1>404 Page not found | <a href="{base}/">Go back home</a></h1>
  <p>{url.pathname}</p>
{:else}
  <h1>Oh no 😳 Something went wrong</h1>
  <p>Statuscode: {status}</p>
{/if}
