import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { MisPostsComponent } from './pages/mis-posts/mis-posts.component';
import { authGuard } from './guards/auth.guard';

/*
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'post-list', component: PostListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
  { path: '', component: PostListComponent },
  { path: '', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'nuevo', component: PostFormComponent },
  { path: 'mis-posts', component: MisPostsComponent },

  { path: '', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  // Protegidas
  { path: 'nuevo', component: PostFormComponent, canActivate: [authGuard] },
  { path: 'mis-posts', component: MisPostsComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: '' }
];*/

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'post-list', component: PostListComponent, canActivate: [authGuard] },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'nuevo', component: PostFormComponent, canActivate: [authGuard] },
  { path: 'mis-posts', component: MisPostsComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' }
];


