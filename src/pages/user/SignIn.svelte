<script>
import { redirectTo } from 'router/redirect.js';

import FormBox from './components/FormBox.svelte';
import TextInput from './components/TextInput.svelte';
import SubmitButton from './components/SubmitButton.svelte';

let title = 'Sign in';
let isError = false;
let extLinks = [
  { path: '/user/up', name: 'SIGN UP' },
  { path: '/user/find', name: 'FOTGOT' },
];

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

<content>
<FormBox title={title} isError={isError} extLinks={extLinks}>
  <TextInput placeholder={'YOUR EMAIL'} bind:value={email} />
  <TextInput placeholder={'PASSWORD'} isPassword={true} bind:value={password} />

  <SubmitButton name={'enter'} on:submit={signIn} />
</FormBox>
</content>
