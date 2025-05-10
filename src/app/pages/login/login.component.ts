import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // Importa RouterModule

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]  // Agrega RouterModule aquí
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
<<<<<<< HEAD
      next: data => console.log("Usuario autenticado:", data),
      error: err => console.error("Error al loguear:", err)
=======
      next: (response) => {
        console.log('Usuario logueado:', response);
        localStorage.setItem('usuario', JSON.stringify(response)); 
        this.router.navigate(['/post-list']);  // Redirige a post-list
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Credenciales inválidas');
      }
>>>>>>> 74686f8 (proyecto funcional)
    });
  }
}
