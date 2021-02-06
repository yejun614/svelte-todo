<script>
import Markdown from './Markdown.svelte';

export let data;

const toggleCheck = () => (data.isCheck = !data.isCheck);

</script>

<style>
.box-item {
  width: 100%;
}
</style>

<div class="box-item" on:click={toggleCheck}>
  <Markdown text={data.text} isUnderline={data.isCheck} />
</div>
