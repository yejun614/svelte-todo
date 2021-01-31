<script>
export let data;

const toggleCheck = () => (data.isCheck = !data.isCheck);

</script>

<style>
.box-item-container {
  padding-left: 20px;
}

.text.checked {
  text-decoration: line-through;
}

</style>

<div class="box-item-container" on:click={toggleCheck}>
  <span class="text {data.isCheck? 'checked' : ''}">{data.text}</span>
</div>
