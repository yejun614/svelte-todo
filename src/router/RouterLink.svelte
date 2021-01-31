<script>

import { curRoute } from './store';

export let page = { path: '/Home', name: 'Home' };

function redirectTo(event) {
  // Change current router path
  curRoute.set(event.target.pathname);

  // Push browser history
  window.history.pushState({path: page.path}, '',
    window.location.origin + page.path);
}

</script>

<style>

a {
  text-decoration: blink;
}

</style>

<a href="{page.path}" on:click|preventDefault={redirectTo}>{page.name}</a>
