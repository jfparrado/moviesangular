import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './components/app/app-routing.module'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EstrenosPageComponent } from './components/estrenos-page/estrenos-page.component';
import { CategoriasPageComponent } from './components/categorias-page/categorias-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { MasVistoPreviewComponent } from './components/mas-visto-preview/mas-visto-preview.component';
import { EstrenosPreviewComponent } from './components/estrenos-preview/estrenos-preview.component';
import { TemplateManyMoviesComponent } from './components/template-many-movies/template-many-movies.component';
import { TemplatePreviewComponent } from './components/template-preview/template-preview.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';


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
    TemplatePreviewComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
