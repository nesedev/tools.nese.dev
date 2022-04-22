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
  import { base } from '$app/paths';
  import Title from '$lib/components/title.svelte';

  export let url: URL;
  export let status: number;
</script>

<Title text={status.toString()} />

{#if status == 404}
  <h1>404 Page not found<br /></h1>
  <img src="{base}/assets/catJAM.gif" alt="catJAM" />
  <p>Route: {url.pathname}</p>
  <a href="{base}/">Go back home</a>
{:else}
  <h1>Oh no 😳 Something went wrong</h1>
  <img src="{base}/assets/catJAM.gif" alt="catJAM" />
  <p>Statuscode: {status}</p>
  <a href="{base}/">Go back home</a>
{/if}
