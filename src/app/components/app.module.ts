import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from '../components/app/app-routing.module'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EstrenosPageComponent } from './estrenos-page/estrenos-page.component';
import { CategoriasPageComponent } from './categorias-page/categorias-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MasVistoPreviewComponent } from './mas-visto-preview/mas-visto-preview.component';
import { EstrenosPreviewComponent } from './estrenos-preview/estrenos-preview.component';
import { TemplateManyMoviesComponent } from './template-many-movies/template-many-movies.component';
import { TemplatePreviewComponent } from './template-preview/template-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    DetailMovieComponent,
    HomePageComponent,
    EstrenosPageComponent,
    CategoriasPageComponent,
    SearchPageComponent,
    MasVistoPreviewComponent,
    EstrenosPreviewComponent,
    TemplateManyMoviesComponent,
    TemplatePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
