<script>
import { onMount, onDestroy } from 'svelte';

import { curRoute, authState } from '@/store';
import RouterLink from 'router/RouterLink.svelte';

let node = undefined;
let isEnable = false;

const toggleMenu = () => (isEnable = !isEnable);

const clickOutside = event => {
  if (node && !node.contains(event.target) && !event.defaultPrevented) {
    toggleMenu();
  }
};

onMount(() => {
  // Click outside event
  document.addEventListener('click', clickOutside, true);
});

onDestroy(() => {
  // Remove click outside event
  document.removeEventListener('click', clickOutside, true);
});
</script>

<style>
button {
  width: 150px;
  height: 45px;
  
  text-transform: uppercase;
  color: #e0e0e0;
  background-color: #2c3e50;
  
  margin-right: 20px;
}

button:hover {
  color: #2c3e50;
  background-color: #e0e0e0;
  
  cursor: pointer;
}

nav {
  position: absolute;
  top: 70px;
  right: 20px;
  
  display: flex;
  flex-direction: column;
}

nav li {
  width: 200px;
  height: 40px;
  list-style: none;
  
  display: flex;
  align-items: center;
  
  border-top: 1px solid #e0e0e0;
}

nav li:last-child {
  border-bottom: 1px solid #e0e0e0;
}

nav li:hover {
  background-color: #e0e0e0;
}

nav li .material-icons {
  margin: 0 20px;
}

nav li :global(.link) {
  font-size: 14px;
  color: black;
  text-decoration: blink;
}

</style>

<button class="btn" on:click={toggleMenu}>Menu</button>

{#if isEnable}
<nav bind:this={node}>
  {#if $curRoute != "/"}
  <li>
    <span class="material-icons">home</span>
    <RouterLink class="link" path={"/"} name={"Home"} />
  </li>
  {/if}
  
  {#if $authState}
  <li>
    <span class="material-icons">logout</span>
    <RouterLink class="link" path={"/user/out"} name={"Sign Out"} />
  </li>
  {:else}
  <li>
    <span class="material-icons">login</span>
    <RouterLink class="link" path={"/user"} name={"Sign In"} />
  </li>
  {/if}

  {#if $authState}
  <li>
    <span class="material-icons">account_box</span>
    <RouterLink class="link" path={"/"} name={"User Profile"} />
  </li>
  {/if}
  
  <li>
    <span class="material-icons">subject</span>
    <RouterLink class="link" path={"/"} name={"Manual"} />
  </li>
  <li>
    <span class="material-icons">code</span>
    <a class="link" href="https://github.com/yejun614/svelte-todo" target="_blank">Github</a>
  </li>
</nav>
{/if}
