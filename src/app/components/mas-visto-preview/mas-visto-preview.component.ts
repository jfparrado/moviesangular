import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralMovie } from '../../interfaces/interfaces';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-mas-visto-preview',
  templateUrl: './mas-visto-preview.component.html',
  styleUrls: ['./mas-visto-preview.component.css']
})
export class MasVistoPreviewComponent {
  movies: GeneralMovie[] = [];
  moviesWithPoster: GeneralMovie[] = [];

  constructor(private http: HttpClient,private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMasVistoPreview()
      .subscribe(data => {
        this.movies = data;
        this.moviesWithPoster = this.getMoviesWithPosters();
      });
  }

  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path !== undefined && movie.poster_path !== null && movie.poster_path !== '');
  }  
}
