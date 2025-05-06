import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registrar() {
    const nuevoUsuario = {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      rol: 'ROL_USER' // Rol fijo como indicaste
    };

    this.authService.registrar(nuevoUsuario).subscribe({
      next: () => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']);
      },
      error: () => {
        alert('Error al registrar usuario');
      }
    });
  }
}
