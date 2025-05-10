import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterModule } from '@angular/router';  // Importa RouterModule

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]  // Agrega RouterModule aquí
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Método de navegación al Login
  navegarAlLogin() {
    this.router.navigate(['/login']);
  }

  // Método para registrar al usuario
  registrar() {
    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      rol: 'ROL_USER'  // Asumiendo que el rol por defecto es "ROL_USER"
    };

    // Llamada al servicio para registrar al usuario
    this.authService.registrar(nuevoUsuario).subscribe({
      next: () => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']);  // Redirige al login después de registrar
      },
      error: (err) => {
        alert('Error al registrar usuario');
        console.error('Error al registrar usuario:', err);  // Mostrar el error en consola
      }
    });
  }
}
