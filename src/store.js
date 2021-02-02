import { writable } from 'svelte/store';

/* Router store */
export const curRoute = writable('/');

/* User store */
export const authState = writable(false);
export const userProfile = writable({});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // Change authentication state
    authState.set(true);

    // Get user profile
    userProfile.set({
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      uid: user.uid,
    });
  } else {
    // Clear user store
    authState.set(false);
    userProfile.set({});
  }
});
