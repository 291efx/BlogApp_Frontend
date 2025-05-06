import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/publicaciones'; // Ajusta si es otro puerto

  constructor(private http: HttpClient) {}

  listarPublicaciones(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerPostPorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  crearPublicacion(post: any): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  listarPorUsuario(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuario/${username}`);
  }


}
