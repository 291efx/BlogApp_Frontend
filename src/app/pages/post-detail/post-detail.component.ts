import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { ComentarioService } from '../../services/comentario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;
  comentarios: any[] = [];
  nuevoComentario: string = '';
  postId!: number;
  formularioEdit = { titulo: '', contenido: '' };
  archivoEditado: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private comentarioService: ComentarioService
  ) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
    this.cargarPost();
    this.cargarComentarios();
  }

  cargarPost() {
    this.postService.obtenerPostPorId(this.postId).subscribe({
      next: data => this.post = data,
      error: () => alert('Error al cargar la publicación')
    });
  }

  cargarComentarios() {
    this.comentarioService.listarPorPublicacion(this.postId).subscribe({
      next: data => this.comentarios = data,
      error: () => alert('Error al cargar los comentarios')
    });
  }

  comentar() {
    //explicar esto
    var userString =localStorage.getItem("usuario");
    console.log(userString);
    if (!userString) {
      console.error("No se encontró el usuario en el localStorage.");
      return;
    }
    const user = JSON.parse(userString); 
    const comentario = {
      contenido: this.nuevoComentario,
      usuario: { id: parseInt(user.id)},
      publicacion: { id: this.postId }
    };

    this.comentarioService.comentar(comentario).subscribe({
      next: () => {
        this.nuevoComentario = '';
        this.cargarComentarios();
      },
      error: () => alert('No se pudo enviar el comentario')
    });
  }

  // Método para llenar el formulario de edición con los datos actuales de la publicación
  llenarFormularioEditar() {
    if (this.post) {
      this.formularioEdit.titulo = this.post.titulo;
      this.formularioEdit.contenido = this.post.contenido;
      this.archivoEditado = null;
    }
  }

  seleccionarArchivoEditar(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.archivoEditado = input.files[0];
    }
  }

  // Método para eliminar una publicación
  eliminarPublicacion() {
    if (confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {
      this.postService.eliminarPublicacion(this.post.id).subscribe({
        next: () => {
          alert('Publicación eliminada con éxito');
          this.router.navigate(['/post-list']); // Redirige a la lista de publicaciones
        },
        error: () => alert('Error al eliminar la publicación')
      });
    }
  }

  // Método para actualizar una publicación
  actualizarPublicacion(event: Event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('titulo', this.formularioEdit.titulo);
    formData.append('contenido', this.formularioEdit.contenido);

    if (this.archivoEditado) {
      formData.append('archivo', this.archivoEditado);
    }

    this.postService.actualizarPublicacion(this.post.id, formData).subscribe({
      next: (resp: any) => {
        this.post = resp;
        const modalElement = document.getElementById('modalEditarPublicacion');
        if (modalElement) {
          const modal = bootstrap.Modal.getInstance(modalElement);
          modal?.hide();
        }
      },
      error: err => {
        console.error('Error al actualizar publicación', err);
      }
    });
  }
}
