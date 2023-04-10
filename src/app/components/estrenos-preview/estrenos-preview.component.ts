import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralMovie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-estrenos-preview',
  templateUrl: './estrenos-preview.component.html',
  styleUrls: ['./estrenos-preview.component.css']
})
export class EstrenosPreviewComponent {
  movies: GeneralMovie[] = [];
  moviesWithPoster: GeneralMovie[] = [];
  private _http: HttpClient;
  constructor(private http: HttpClient) {
    this._http = http;
  }
  ngOnInit(): void {
    this.http.get<GeneralMovie[]>('http://localhost:3001/latestmovies')
      .subscribe(data => {
        this.movies = data;
        this.moviesWithPoster = this.getMoviesWithPosters();
      });
  }
  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path);
  }  
}