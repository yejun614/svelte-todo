<script>
import FormBox from './components/FormBox.svelte';
import TextInput from './components/TextInput.svelte';
import SubmitButton from './components/SubmitButton.svelte';

let title = 'Find your password';
let isError = false;
let extLinks = [
  { path: '/user', name: 'BACK' },
];

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

<content>
<FormBox title={title} isError={isError} extLinks={extLinks}>
  <TextInput placeholder={'YOUR EMAIL'} bind:value={email} />

  <SubmitButton name={'try it'} on:submit={findUser} />
</FormBox>
</content>
