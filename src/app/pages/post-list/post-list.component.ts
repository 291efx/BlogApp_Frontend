import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list',
  standalone: true,
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  imports: [CommonModule, RouterModule]
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService,  private router: Router) {}

  ngOnInit(): void {
    this.postService.listarPublicaciones().subscribe({
      next: (data: Post[]) => this.posts = data,
      error: () => alert('Error al cargar publicaciones')
    });
  }

  verDetalle(id: number) {
    this.router.navigate(['/post', id]); // <--- NAVEGACIÓN
  }

}
