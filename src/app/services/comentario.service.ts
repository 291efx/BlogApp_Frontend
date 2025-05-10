import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'http://localhost:8080/api/comentarios';

  constructor(private http: HttpClient) {}

  listarPorPublicacion(publicacionId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/publicacion/${publicacionId}`);
  }

  comentar(comentario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, comentario);
  }
}
