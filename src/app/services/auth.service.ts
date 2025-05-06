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
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });

    // Usamos un endpoint público para probar que las credenciales son válidas
    return this.http.get("http://localhost:8080/api/publicaciones");
  }

  registrar(usuario: any) {
    return this.http.post("http://localhost:8080/api/usuarios/registrar", usuario);
  }


}
