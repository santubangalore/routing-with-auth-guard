import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let loggedIn= inject(AuthService).isLoggedIn();
  let router = inject(Router);
  if(!loggedIn){
    router.navigate(["login"])
    return false;
  }
  return true;
};
