<script>
import RouterLink from './router/RouterLink.svelte';
import Route from './router/Route.svelte';

import RouterBtn from './router/RouterBtn.svelte';

let currentPath = '/';

let nextPath = {
  '/': { path: '/user', name: 'Sign In' }, 
  '/user': { path: '/', name: 'Back' },
  '/user/up': { path: '/user', name: 'Sign In' },
  '/user/find': { path: '/user', name: 'Sign In' },
};

let buttonName = 'Sign In';
let buttonPath = '/user';

const changePath = event => {
  currentPath = event.detail.path;
  
  const next = nextPath[currentPath];
  
  buttonName = next.name;
  buttonPath = next.path;
}
</script>

<style>
header {
  width: 100%;
  
  position: absolute;
  top: 20px;
  
  display: flex;
  justify-content: space-between;
}

header .site-logo {
  width: fit-content;
  
  font-style: italic;
  text-transform: uppercase;
  cursor: default;
  
  margin-left: 20px;
}
</style>

<Route on:change={changePath} />

<header>
  <div class="site-logo">sim todo app</div>
  
  <RouterBtn name={buttonName} path={buttonPath} />
</header>

