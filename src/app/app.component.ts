import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgIf } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule, NgIf],
  providers: [
    { provide: HTTP_INTERCEPTORS, useFactory: authInterceptor, multi: true }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mostrarNavbar: boolean = true;
  title = 'BlogApp';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const rutasOcultas = ['/login', '/registro'];
        this.mostrarNavbar = !rutasOcultas.includes(event.url);
        console.log('Mostrar navbar: ', this.mostrarNavbar);
      }
    });
  }
}
