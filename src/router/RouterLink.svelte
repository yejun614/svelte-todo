<script>
import { redirectTo } from './redirect';

// Page data
export let path = '/Home';
export let name = 'Home';

// Click callback function
const clicked = () => redirectTo(path);
</script>

<style>
a:hover {
  text-decoration: blink;
}
</style>

<a class={$$props.class}
  href="{path}"
  on:click|preventDefault={clicked}
  >
  {name}
</a>
