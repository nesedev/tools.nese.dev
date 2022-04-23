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

<div class="wrapper">
  <h1>Welcome to Nese Tools</h1>

  <p>This page is very empty so please enjoy some of my favourite Lorem ipsum.</p>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus magna, sollicitudin a dolor
    vitae, congue tristique metus. Suspendisse potenti. Quisque sed diam quam. Etiam facilisis dui a
    nulla convallis, id dignissim lorem lacinia. Nunc in enim purus. Ut pharetra turpis gravida
    neque luctus, et ornare velit malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit.
  </p>
  <p>
    Sed condimentum pharetra tristique. Morbi pellentesque eros a lacus consequat, vitae maximus
    justo dictum. Suspendisse potenti. Suspendisse tincidunt urna elementum, accumsan purus ac,
    dapibus enim. Nam dictum amogus sussy nisi nec suscipit ultricies. Mauris finibus pellentesque
    tristique. Fusce congue elit eget mauris vestibulum rhoncus. Aliquam erat volutpat. Donec
    egestas rutrum massa. Fusce sapien risus, varius ut condimentum sed, cursus at quam. In et quam
    a mauris pharetra auctor. Suspendisse potenti. Nunc interdum ac ex sed elementum. Donec mattis
    ex eros, a ultricies ex imperdiet eu. Proin malesuada sagittis fermentum.
  </p>
  <p>
    Vestibulum lobortis ac lacus ut euismod. Proin imperdiet dui eros, non iaculis dolor euismod
    nec. Fusce eget libero turpis. Nunc blandit mauris vel libero tristique scelerisque. Quisque in
    enim ut arcu mattis ornare. Vestibulum mauris tellus, pellentesque nec sem a, porttitor pharetra
    lectus. Aliquam convallis pretium placerat. Integer posuere sem ac ante tempus, vel molestie
    nibh tempor. Aliquam consequat never gonna give you up elit eget sapien mattis pretium.
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras
    magna enim, convallis quis risus sed, vestibulum never gonna let you down tempor eros. Etiam
    fermentum in neque ut laoreet. Nullam commodo dui libero. Nam non ullamcorper urna. Nullam id
    eleifend sapien, id euismod sapien.
  </p>
</div>

<style>
  .wrapper {
    margin: auto;
    padding: 1rem;
  }
</style>
