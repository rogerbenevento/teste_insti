import { CanActivateFn } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {

  // check if user is logged
  const logged = localStorage.getItem('logged');
  if (logged === 'true') {
    return true;
  }

  // redirect to login page
  return false;
};
