<script>
import { redirectTo } from './redirect';

export let name = 'Home';
export let path = '/';

const clickBtn = () => redirectTo(path);
</script>

<style>
button {
  width: 150px;
  height: 45px;
  
  text-transform: uppercase;
  color: #e0e0e0;
  background-color: #404040;
  
  margin-right: 20px;
}

button:hover {
  color: #404040;
  background-color: #e0e0e0;
  
  cursor: pointer;
}

</style>

<button class="btn" on:click={clickBtn}>{name}</button>
