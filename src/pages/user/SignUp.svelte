<script>
import TextInput from './components/TextInput.svelte';
import SubmitButton from './components/SubmitButton.svelte';

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
  <div class="title">Sign up!</div>
  
  <div class="wrap">
    <TextInput placeholder={'YOUR EMAIL'} />
    <TextInput placeholder={'PASSWORD'} isPassword={true} />
    <TextInput placeholder={'PASSWORD'} isPassword={true} />
  </div>
  
  <SubmitButton name={'enter'} />
</form>
</content>
