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
  formulario = {
    titulo: '',
    contenido: '',
    usuarioId: null
  };

  archivoSeleccionado: File = null!;

  constructor(private postService: PostService, private router: Router) {}

  seleccionarArchivo(event: any) {
    this.archivoSeleccionado = event.target.files[0];
  }

  enviarFormulario(event: Event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('titulo', this.formulario.titulo);
    formData.append('contenido', this.formulario.contenido);
    formData.append('archivo', this.archivoSeleccionado);

    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      const usuario = JSON.parse(usuarioGuardado);
      this.formulario.usuarioId = usuario.id;
      formData.append('usuarioId', this.formulario.usuarioId ?? '');
    } else {
      alert('No se encontró el usuario en el almacenamiento local.');
      return;
    }
    console.log('Formulario enviado:', this.formulario);

    this.postService.crearPublicacion(formData).subscribe({
      next: res => {
        console.log('Éxito:', res);
        alert(res.mensaje);  // mostrará "Publicación creada con éxito"
        this.router.navigate(['/']);
      },
      error: err => {
        console.error('Error:', err);
        alert('Hubo un error al crear la publicación.');
      }

    });
  }
}



