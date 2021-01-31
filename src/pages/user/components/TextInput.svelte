<script>
export let placeholder = '';
export let value = '';
export let isPassword = false;

</script>

<style>
input {
  width: 100%;
  height: 60px;
  margin: 0;
  
  border: 0;
  border-bottom: 2px solid #333333;
  background-color: #e0e0e0;
  
  padding-left: 30px;
  
  font-size: 16px;
}

input:focus {
  outline: none;
}

</style>

{#if isPassword}
<input type="password" placeholder={placeholder} bind:value={value} />
{:else}
<input type="text" placeholder={placeholder} bind:value={value} />
{/if}
