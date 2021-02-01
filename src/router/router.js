
import Home from '../pages/Home.svelte';
import SignIn from '../pages/user/SignIn.svelte';
import SignUp from '../pages/user/SignUp.svelte';
import FindUser from '../pages/user/FindUser.svelte';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user',
    name: 'Sign In',
    component: SignIn,
  },
  {
    path: '/user/up',
    name: 'Sign Up',
    component: SignUp,
  },
  {
    path: '/user/find',
    name: 'Find User',
    component: FindUser,
  },
];
