import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PostFormComponent {
  titulo = '';
  descripcion = '';
  archivo = '';

  constructor(private postService: PostService, private router: Router) {}

  crearPost() {
    const post = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      archivo: this.archivo,
      usuario: {
        username: localStorage.getItem('usuario')
      }
    };

    this.postService.crearPublicacion(post).subscribe({
      next: () => {
        alert('¡Publicación creada!');
        this.router.navigate(['/']);
      },
      error: () => alert('No se pudo crear la publicación')
    });
  }
}
