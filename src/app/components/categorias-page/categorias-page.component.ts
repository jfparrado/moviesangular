import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralMovie } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../../services/user.service";
import { MoviesService } from "../../services/movies.service";

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
  constructor(private http: HttpClient, private userService: UserService, private moviesService: MoviesService, private route: ActivatedRoute) {
    this._http = http;
  }
  ngOnInit(): void {
    const genderParam = this.route.snapshot.paramMap.get('gender');
    this.userService.refreshFirebaseToken()
    const headers = this.userService.getHeaders()
    if (genderParam !== null) {
      this.gender = genderParam;
      this.moviesService.getPerCategory(headers,this.gender)
      .subscribe(data => {
        this.moviesByGender = data;
      });
      // },error?:());
    }
  }
}
