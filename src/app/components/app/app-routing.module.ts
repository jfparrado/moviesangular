import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CategoriasPageComponent } from '../categorias-page/categorias-page.component';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';
import { EstrenosPageComponent } from '../estrenos-page/estrenos-page.component';
import { SearchPageComponent } from '../search-page/search-page.component';
import { HomePageComponent } from '../home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'estrenos', component: EstrenosPageComponent },
  { path: 'categorias/:gender', component: CategoriasPageComponent },
  { path: 'search/:movie_name', component: SearchPageComponent },
  { path: 'detailmovie/:id', component: DetailMovieComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
