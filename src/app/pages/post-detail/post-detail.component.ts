import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { ComentarioService } from '../../services/comentario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PostDetailComponent implements OnInit {
  post: any;
  nuevoComentario: string = '';
  postId!: number;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private comentarioService: ComentarioService
  ) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
    this.cargarPost();
  }

  cargarPost() {
    this.postService.obtenerPostPorId(this.postId).subscribe({
      next: data => this.post = data,
      error: () => alert('Error al cargar la publicación')
    });
  }

  comentar() {
    const comentario = {
      texto: this.nuevoComentario,
      usuario: { username: localStorage.getItem('usuario') },
      publicacionId: this.postId
    };

    this.comentarioService.comentar(this.postId, comentario).subscribe({
      next: () => {
        this.nuevoComentario = '';
        this.cargarPost(); // refresca comentarios
      },
      error: () => alert('No se pudo enviar el comentario')
    });
  }
}
