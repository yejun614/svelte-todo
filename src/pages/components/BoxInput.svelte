<script>
import { createEventDispatcher, onMount } from 'svelte';
const dispatcher = createEventDispatcher();

export let placeholder = '';
export let value = '';

const clear = () => (value = '');

const addItem = () => {
  dispatcher('add', {text: value});
  clear();
}

const removeItems = () => dispatcher('remove');

onMount(() => {
  // Text Input Focus
  const textInput = document.querySelector('.text-input');
  textInput.focus();
});

const keydown = event => {
  const code = event.code;

  if (code === 'Enter') {
    if (value != '') addItem();
  }
};
</script>

<style>

.box-input-container {
  min-height: 60px;
  border: 2px solid #333333;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 20px;
}

.box-input-container * {
  margin: 0;
  padding: 0;
  border: none;
}

.text-input {
  width: 100%;
  height: 100%;
  
  text-align: center;
}

.icon-btn {
  background: none;
  line-height: 50%;
}

.text-input:focus {
  outline: none;
}

</style>


<div class="box-input-container">
  <button class="icon-btn" on:click={removeItems}>
    <i class="material-icons">close</i>
  </button>

  <input class="text-input" type="text" placeholder={placeholder} bind:value={value} />

  <button class="icon-btn" on:click={addItem}>
    <i class="material-icons">add</i>
  </button>
</div>

<svelte:window on:keydown={keydown} />
