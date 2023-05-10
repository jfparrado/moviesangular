import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GeneralMovie, DetailedMovie, categories } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private _http: HttpClient;
  movies: GeneralMovie[] = [];
  latestMovies: GeneralMovie[] = [];
  public basicUrl="http://localhost:3001/";
  constructor(private http: HttpClient) {
    this._http = http;
  }

  getMoviesWithPosters(movies: GeneralMovie[]): GeneralMovie[] {
    return movies.filter(movie => movie.poster_path);
  }

  getEstrenos(headers: any): Observable<GeneralMovie[]> {
    return this.http.get<GeneralMovie[]>(`${this.basicUrl}latestmovies`, { headers });
  }
  getByName(headers: any): Observable<GeneralMovie[]> {
    return this.http.get<GeneralMovie[]>(`${this.basicUrl}latestmovies`, { headers });
  }
  getEstrenosPreview(): Observable<GeneralMovie[]> {
    return this.http.get<GeneralMovie[]>(`${this.basicUrl}latestmoviespreview`);
  }
  getMasVistoPreview(): Observable<GeneralMovie[]> {
    return this.http.get<GeneralMovie[]>(`${this.basicUrl}topranked`);
  }
  getCategorias(): Observable<categories[]> {
    return this.http.get<categories[]>(`${this.basicUrl}moviegenders`);
  }
  getDetails(headers: any, id: string): Observable<DetailedMovie> {
    return this.http.get<DetailedMovie>(`${this.basicUrl}detailmovie/${id}`, { headers })
  }
  getPerCategory(headers: any, gender: string): Observable<GeneralMovie[]> {
    return this.http.get<GeneralMovie[]>(`${this.basicUrl}moviesbygender/${gender}`, { headers })
  } 
}
