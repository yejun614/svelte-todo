
import { curRoute } from './store';

export function redirectTo(path) {
  // Change current router path
  curRoute.set(path);

  // Push browser history
  window.history.pushState({path: path}, '',
    window.location.origin + path);
}


