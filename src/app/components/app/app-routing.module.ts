import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CategoriasPageComponent } from '../categorias-page/categorias-page.component';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';
import { EstrenosPageComponent } from '../estrenos-page/estrenos-page.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from '../login/login.component';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'estrenos', component: EstrenosPageComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register']))}, //empaquetar esto como variable y ponerla en las demas rutas
  { path: 'categorias/:gender', component: CategoriasPageComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register'])) },
  { path: 'search/:movie_name', component: SearchPageComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register'])) },
  { path: 'detailmovie/:id', component: DetailMovieComponent, ...canActivate(()=>redirectUnauthorizedTo(['/register'])) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
