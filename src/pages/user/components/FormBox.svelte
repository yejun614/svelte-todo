<script>
import RouterLink from 'router/RouterLink.svelte';
import Title from './Title.svelte';

export let title = '';
export let isError = false;
export let isInputBox = true;
export let extLinks = [];
</script>

<style>
/* Form */
form {
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Input Box */
.wrap {
  width: 300px;
  border: none;
}

/* Option: Input box border */
form.input-box .wrap > :global(input) { border-bottom: none; }
form.input-box .wrap > :global(input:last-of-type) { border-bottom: 2px solid #333333; }

/* External Links */
.external > :global(*) {
  margin: 0 5px;
}
</style>

<form class="{isInputBox ? 'input-box' : ''}">
  <Title title={title} isError={isError} />

  <div class="wrap">
    <slot></slot>
  </div>

  {#if extLinks.length > 0}
  <div class="external">
    {#each extLinks as item}
    <RouterLink path={item.path} name={item.name} />
    {/each}
  </div>
  {/if}
</form>
