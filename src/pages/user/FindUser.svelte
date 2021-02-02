<script>
import Title from './components/Title.svelte';
import TextInput from './components/TextInput.svelte';
import SubmitButton from './components/SubmitButton.svelte';

import RouterLink from 'router/RouterLink.svelte';

let title = 'Find your password';
let isError = false;

let email = '';

const findUser = () => {
  // Firebase Authentication
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Email sent.
    isError = false;
    title = 'A password reset email has been sent.';
    
    // Clear email field
    email = '';
    
  }).catch(function(error) {
    // An error happened.
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

.title {
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  
  margin-bottom: 40px;
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
  </div>
  
  <SubmitButton name={'try it'} on:submit={findUser} />
  
  <div class="help">
    <RouterLink path={"/user"} name={"BACK"} />
  </div>
</form>
</content>
