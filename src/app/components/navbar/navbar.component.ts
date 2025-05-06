import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent implements OnInit {
  usuario: string | null = null;

  ngOnInit(): void {
    this.usuario = localStorage.getItem('usuario');
  }

  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.usuario = null;
  }
}
