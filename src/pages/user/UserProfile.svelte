<script>
import { authState, userProfile } from '@/store';

import FormBox from './components/FormBox.svelte';
import TextInput from './components/TextInput.svelte';

let title = 'User profile';
let isError = false;

let password = '';
let passwordDoubleCheck = '';

const deleteAccount = () => {};
const resetAllNotes = () => {};

const saveUserProfile = () => {};
</script>

<style>
p {
  color :#5e5e5e;
  font-size: 14px;

  margin: 5px 0;
  padding-left: 20px;
}

.item {
  margin-bottom: 20px;
}

.btn-box {
  width: 300px;
  display: flex;

  margin-top: 20px;
}

.btn-box > * {
  width: 100%;

  flex: 1;
}

button {
  width: 100%;
  height: 45px;
  border: none;

  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
}

button.delete { background-color: #e74c3c; }
button.reset { background-color: #404040; }
button.save { background-color: #3498db; }

button:hover {
  text-decoration: blink;
  
  color: #5e5e5e;
  background-color: #e0e0e0;

  cursor: pointer;
}

.warning-text {
  font-weight: bold;
  font-size: 25px;
}
</style>

<content>
{#if $authState}
<FormBox title={title} isError={isError} isInputBox={false}>
  <div class="item">
    <p>Your email (CAN NOT CHANGE)</p>
    <TextInput placeholder={"YOUR EMAIL"} value={$userProfile.email} isDisabled={true} />
  </div>

  <div class="item">
    <p>Password</p>
    <TextInput placeholder={"PASSWORD"} bind:value={password} isPassword={true} />
  </div>

  {#if password.length > 0}
  <div class="item">
    <p>Password double check</p>
    <TextInput placeholder={"PASSWORD DOUBLE CHECK"} bind:value={passwordDoubleCheck} isPassword={true} />
  </div>
  {/if}

  <div class="btn-box">
    <button class="delete" on:click|preventDefault={deleteAccount}>Delete account</button>
    <button class="reset" on:click|preventDefault={resetAllNotes}>Reset all notes</button>
  </div>

  <button class="save" on:click|preventDefault={saveUserProfile}>Save</button>
</FormBox>
{:else}
<span class="warning-text">
  Please sign in first.
</span>
{/if}
</content>
