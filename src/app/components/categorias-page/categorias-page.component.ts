import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralMovie } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias-page',
  templateUrl: './categorias-page.component.html',
  styleUrls: ['./categorias-page.component.css']
})
export class CategoriasPageComponent {
  movies: GeneralMovie[] = [];
  moviesByGender: GeneralMovie[] = [];
  gender: string = '';
  private _http: HttpClient;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this._http = http;
  }
  ngOnInit(): void {
    const genderParam = this.route.snapshot.paramMap.get('gender');
    if (genderParam !== null) {
      this.gender = genderParam;
      this.http.get<GeneralMovie[]>('http://localhost:3001/moviesbygender/' + this.gender)
        .subscribe(data => {
          this.moviesByGender = data;
        });
    }
  }
  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path);
  }  
}
