import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralMovie } from '../../interfaces/interfaces';
import { MoviesService } from "../../services/movies.service";

@Component({
  selector: 'app-estrenos-preview',
  templateUrl: './estrenos-preview.component.html',
  styleUrls: ['./estrenos-preview.component.css']
})
export class EstrenosPreviewComponent {
  movies: GeneralMovie[] = [];
  moviesWithPoster: GeneralMovie[] = [];
  constructor(private moviesService: MoviesService) {
  }
  ngOnInit(): void {
    this.moviesService.getEstrenosPreview()
      .subscribe(data => {
        this.movies = data;
        this.moviesWithPoster = this.getMoviesWithPosters();
      });
  }
  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path);
  }  
}
