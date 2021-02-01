<script>
export let name = '';
</script>

<style>
a {
  width: 300px;
  height: 60px;
  padding: 0 2px;
  
  margin: 20px 0;
  
  color: #e0e0e0;
  background-color: #5e5e5e;
  
  text-transform: uppercase;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
}

a:hover {
  text-decoration: blink;
  
  color: #5e5e5e;
  background-color: #e0e0e0;
}
</style>

<a>{name}</a>
