<script>
export let placeholder = '';
export let value = '';
export let isPassword = false;
export let isDisabled = false;
</script>

<style>
input {
  width: 100%;
  height: 60px;
  margin: 0;
  
  border: 2px solid #333333;
  background-color: #e0e0e0;
  
  padding-left: 30px;
  
  color: black;
  font-size: 16px;
}

input:focus {
  outline: none;
}

</style>

{#if isPassword}
<input type="password" placeholder={placeholder} bind:value={value} disabled={isDisabled} />
{:else}
<input type="text" placeholder={placeholder} bind:value={value} disabled={isDisabled} />
{/if}
