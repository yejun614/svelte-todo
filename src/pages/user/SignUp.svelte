<script>
import { redirectTo } from 'router/redirect.js';

import Title from './components/Title.svelte';
import TextInput from './components/TextInput.svelte';
import SubmitButton from './components/SubmitButton.svelte';

import RouterLink from 'router/RouterLink.svelte';

let title = 'Sign up!';
let isError = false;

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
    <TextInput placeholder={'PASSWORD'} isPassword={true} bind:value={passwordCheck} />
  </div>
  
  <SubmitButton name={'enter'} on:submit={signUp} />
  
  <div class="help">
    <RouterLink path={"/user"} name={"BACK"} />
  </div>
</form>
</content>
