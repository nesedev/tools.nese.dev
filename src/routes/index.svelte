<script lang="ts">
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import Title from '$lib/components/title.svelte';

  const url = $page.url;

  if (url.hash && url.hash.substring(1).startsWith('discord-april-fools')) {
    goto(`${base}/discord-april-fools`);
  }
</script>

<Title text="Home" />

<h1>Welcome to Nese Tools</h1>
