<script>

  import { onDestroy, createEventDispatcher } from 'svelte';
  import { curRoute } from './store';
  import router from './router';
  
  const dispatcher = createEventDispatcher();
  
  let component;
  
  const unsubscribe = curRoute.subscribe(value => {
    component = router.filter(r => r.path === $curRoute)[0].component;
    
    dispatcher('change', {path: $curRoute});
  });
  
  onDestroy(unsubscribe);

</script>

<style>
</style>

<div class="main-container">
  <svelte:component this={component} />
</div>