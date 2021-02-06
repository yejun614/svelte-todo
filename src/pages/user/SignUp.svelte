<script>
import { redirectTo } from 'router/redirect.js';

import FormBox from './components/FormBox.svelte';
import TextInput from './components/TextInput.svelte';
import SubmitButton from './components/SubmitButton.svelte';

let title = 'Sign up!';
let isError = false;
let extLinks = [
  { path: '/user', name: 'BACK' },
];

let email = '';
let password = '';
let passwordCheck = '';

const passwordDoubleCheck = () => {
  if (password != passwordCheck) {
    // Change title
    isError = true;
    title = 'Different passwords';
    
    // Password Check Field clear
    passwordCheck = '';
    
    return false;
  }
  
  return true;
}

const signUp = () => {
  // Password double check
  if (!passwordDoubleCheck()) return;

  // Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Redirect to Home
      redirectTo('/');
    })
    .catch((error) => {
      // Change title
      isError = true;
      title = error.message;
    });
};
</script>

<content>
<FormBox title={title} isError={isError} extLinks={extLinks}>
  <TextInput placeholder={'YOUR EMAIL'} bind:value={email} />
  <TextInput placeholder={'PASSWORD'} isPassword={true} bind:value={password} />
  <TextInput placeholder={'PASSWORD'} isPassword={true} bind:value={passwordCheck} />

  <SubmitButton name={'enter'} on:submit={signUp} />
</FormBox>
</content>
