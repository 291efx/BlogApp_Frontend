import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private apiUrl = 'http://localhost:8080/publicaciones';

  constructor(private http: HttpClient) {}

  /**
   * Publica un comentario en una publicación específica
   * @param postId ID de la publicación
   * @param comentario Objeto con texto y usuario
   */
  comentar(postId: number, comentario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${postId}/comentarios`, comentario);
  }
}
