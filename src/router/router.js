
import Home from '../pages/Home.svelte';
import About from '../pages/About.svelte';
import Test from '../pages/Test.svelte';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
];
