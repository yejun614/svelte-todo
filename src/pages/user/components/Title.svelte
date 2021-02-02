<script>
export let title = '';
export let isError = false;

</script>

<style>
.title {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  
  margin-bottom: 40px;
}

.title.error {
  color: #ed5353;
}
</style>

<div class="title {isError ? 'error':''}">{title}</div>
