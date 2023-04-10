import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailedMovie } from '../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent {
  detailMovie: DetailedMovie = {} as DetailedMovie;
  id: string = '';

  private _http: HttpClient;
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this._http = http;
  };
  
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = idParam;
      this.http.get<DetailedMovie>('http://localhost:3001/detailmovie/' + this.id)
        .subscribe(data => {
          this.detailMovie = data;
        });
    }
  }  
}
