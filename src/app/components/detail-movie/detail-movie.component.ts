import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailedMovie } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { UserService } from "../../services/user.service";
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent {
  detailMovie: DetailedMovie = {} as DetailedMovie;
  id: string = '';

  private _http: HttpClient;
  constructor(private http: HttpClient, private userService: UserService, private moviesService: MoviesService, private route: ActivatedRoute) {
    this._http = http;
  };
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.userService.refreshFirebaseToken()
    const headers = this.userService.getHeaders()
    if (idParam !== null) {
      this.id = idParam;
      this.moviesService.getDetails(headers,this.id)
      .subscribe(data => {
        this.detailMovie = data;
      });
    }
  }  
}
