import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GeneralMovie } from '../../interfaces/interfaces';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  movies: GeneralMovie[] = [];
  moviesByName: GeneralMovie[] = [];
  name: string = '';
  
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.refreshFirebaseToken()
    const headers = this.userService.getHeaders()
    this.route.paramMap.subscribe(params => {//aca vigila los cambios en la URL
      const nameParam = params.get('movie_name');
      if (nameParam !== null) {
        this.name = nameParam;
        this.http.get<GeneralMovie[]>('http://localhost:3001/search/' + this.name, { headers })
          .subscribe(data => {
            this.moviesByName = data;
            console.log("this.moviesByName :", this.moviesByName);
          });
      }
    });
  }

  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path);
  }
}
