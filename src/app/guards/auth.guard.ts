import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('usuario');

  if (isLoggedIn) {
    return true;  // Si el usuario está logueado, permite el acceso
  } else {
    router.navigate(['/login']);  // Si no está logueado, redirige a login
    return false;
  }
};




