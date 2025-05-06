import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mis-posts',
  standalone: true,
  templateUrl: './mis-posts.component.html',
  styleUrls: ['./mis-posts.component.css'],
  imports: [CommonModule, RouterModule]
})
export class MisPostsComponent implements OnInit {
  misPublicaciones: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    const username = localStorage.getItem('usuario');
    if (username) {
      this.postService.listarPorUsuario(username).subscribe({
        next: data => this.misPublicaciones = data,
        error: () => alert('Error al cargar tus publicaciones')
      });
    }
  }
}
