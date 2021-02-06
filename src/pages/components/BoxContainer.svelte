<script>
import BoxInput from './BoxInput.svelte';
import BoxList from './BoxList.svelte';

export let title = "title";
export let list = [];

let boxListNode;

const addItem = event => {
  const text = event.detail.text;
  
  list = [ ...list, { text: text, isCheck: false } ];
};

const removeItems = event => {};
</script>

<style>

/* Container */
.box-container {
  width: 400px;
  max-height: 80%;

  display: flex;
  flex-direction: column;
}

.box-container * {
  width: 100%;
  height: 60px;
  
  display: flex;
  align-items: center;
  
  background-color: #f4f4f4;
}

/* Elements */
.title {
  min-height: 60px;

  font-weight: bold;
  text-transform: uppercase;
  
  justify-content: center;
  
  cursor: default;
}

.title-bar {
  height: 10px;
  background-color: #404040;
}

</style>

<div class="box-container">
  <div class="title">{title}</div>
  <div class="title-bar"></div>
  
  <BoxInput placeholder={"Add something this place."}
    on:add={addItem} on:remove={removeItems}/>
  
  <BoxList list={list} />

</div>
