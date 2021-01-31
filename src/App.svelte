
<script>

import RouterLink from './router/RouterLink.svelte';
import Route from './router/Route.svelte';

</script>

<style>
nav li {
  list-style: none;
  float: left;
  margin: 0 10px;
}
</style>

<nav>
  <li><RouterLink page={{path: '/', name: 'Home'}} /></li>
  <li><RouterLink page={{path: '/about', name: 'About'}} /></li>
  <li><RouterLink page={{path: '/test', name: 'Test'}} /></li>
</nav>

<Route />
