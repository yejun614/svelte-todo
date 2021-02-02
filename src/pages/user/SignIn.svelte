<script>
import { redirectTo } from 'router/redirect.js';
import RouterLink from 'router/RouterLink.svelte';

import Title from './components/Title.svelte';
import TextInput from './components/TextInput.svelte';
import SubmitButton from './components/SubmitButton.svelte';

let title = 'Sign in';
let isError = false;

let email = '';
let password = '';

const signIn = () => {
  // Set persistence to session
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Sign In with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        // Redirect to Home
        redirectTo('/');
      })
      .catch((error) => {
        // Change title
        isError = true;
        title = error.message;

        // Clear password field
        password = '';
      });
  })
  .catch((error) => {
    console.log('Get persistence error', error.code, error.message);
  });
}
</script>

<style>
form {
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrap {
  width: 300px;
  border: 2px solid #333333;
  border-bottom: none;
}

</style>

<content>
<form>
  <Title title={title} isError={isError} />
  
  <div class="wrap">
    <TextInput placeholder={'YOUR EMAIL'} bind:value={email} />
    <TextInput placeholder={'PASSWORD'} isPassword={true} bind:value={password} />
  </div>
  
  <SubmitButton name={'enter'} on:submit={signIn} />

  <div class="help">
    <RouterLink path={'/user/up'} name={'SIGN UP'} />
    <span>/</span>
    <RouterLink path={'/user/find'} name={'FORGOT'} />
  </div>
</form>
</content>
