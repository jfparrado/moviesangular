import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralMovie } from '../../interfaces/interfaces';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-estrenos-page',
  templateUrl: './estrenos-page.component.html',
  styleUrls: ['./estrenos-page.component.css']
})
export class EstrenosPageComponent {
  movies: GeneralMovie[] = [];
  latestMovies: GeneralMovie[] = [];
  private _http: HttpClient;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    this._http = http;
  }
  ngOnInit(): void {
    const token = this.cookieService.get('jwt');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log("token:",token);
    
    this.http.get<GeneralMovie[]>('http://localhost:3001/latestmovies', { headers })
      .subscribe(data => {
        this.movies = data;
        this.latestMovies = this.getMoviesWithPosters();
      });
  }
  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path);
  }  
}
