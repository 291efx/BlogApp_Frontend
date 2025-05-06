import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';  // 👈 Agrega esto
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostFormComponent } from './pages/post-form/post-form.component';
import { MisPostsComponent } from './pages/mis-posts/mis-posts.component';
import { FormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimations()
  ],
  standaloneComponents: [
    LoginComponent,  // 👈 Agrega aquí todos tus componentes standalone
    RegistroComponent,
    NavbarComponent,
    PostListComponent,
    PostDetailComponent,
    PostFormComponent,
    MisPostsComponent,
    FormsModule
  ]
};


