import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080'; // Cambia si usas otro puerto

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const token = btoa(username + ':' + password);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + token
    });
    localStorage.setItem('authToken', token);
    return this.http.get<any>(this.apiUrl+'/api/usuarios/me', {
      headers,
      withCredentials: true // <-- también inclúyelo, pero solo si tu backend acepta credenciales cruzadas
    });
<<<<<<< HEAD
    return this.http.get(this.apiUrl + "/api/usuarios/me", { headers });

=======
>>>>>>> 74686f8 (proyecto funcional)
  }
  

  registrar(usuario: any) {
    return this.http.post("http://localhost:8080/api/usuarios/registrar", usuario);
  }

  // Método para verificar si el usuario está logueado
  isLoggedIn(): boolean {
    const userId = localStorage.getItem('usuarioId');
    const userEmail = localStorage.getItem('usuarioEmail');
    return !!userId && !!userEmail;
  }

  // Método para cerrar sesión (limpiar el estado)
  logout() {
    localStorage.removeItem('usuarioId');
    localStorage.removeItem('usuarioEmail');
  }
}
