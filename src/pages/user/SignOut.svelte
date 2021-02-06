<script>
import { onMount } from 'svelte';
import { redirectTo } from 'router/redirect.js'

onMount(() => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    console.log('Sign out');
    
  }).catch((error) => {
    // An error happened.
    console.log(error.message);
  });
  
  redirectTo('/');
});

</script>
