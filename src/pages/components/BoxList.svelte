<script>
import BoxItem from './BoxItem.svelte';

export let list = [];

</script>

<style>

.empty {
  width: 100%;
  height: 200px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #e0e0e0;
}

.empty i.material-icons {
  color: #9e9e9e;
  font-size: 64px;
  cursor: default;
}

.item {
  width: 100%;
  height: 60px;
  
  display: flex;
  align-items: center;
  
  cursor: pointer;
}

.item:nth-child(odd) {
  background-color: #bebebe;
}

.item:nth-child(even) {
  background-color: #e0e0e0;
}

.item:hover {
  background-color: #f5f5f5;
}

</style>

<div class="box-list-container">

{#if list.length === 0}
  <div class="empty">
    <i class="material-icons">format_list_bulleted</i>
  </div>
{:else}
  {#each list as item}
  <div class="item">
    <BoxItem data={item} />
  </div>
  {/each}
{/if}

</div>
