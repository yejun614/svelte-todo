<script>
import Route from 'router/Route.svelte';
import RouterLink from 'router/RouterLink.svelte';
import AppMenuBtn from './AppMenuBtn.svelte'
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
  margin-left: 20px;
}

header .site-logo :global(.link) {
  color: #333333;
  font-style: italic;
  text-transform: uppercase;
  cursor: pointer;
}
</style>

<Route />

<header>
  <div class="site-logo">
    <RouterLink class="link" path={"/"} name={"sim todo app"} />
  </div>
  
  <AppMenuBtn />
</header>
