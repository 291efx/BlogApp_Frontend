import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Puedes guardar el token base64 de usuario:contraseña si lo deseas,
  // pero aquí asumimos que ya tienes ese token guardado después del login
  const token = localStorage.getItem('authToken');

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Basic ${token}`
      },
      withCredentials: true // <-- solo si tu backend lo requiere
    });
    return next(authReq);
  }

  return next(req);
};
