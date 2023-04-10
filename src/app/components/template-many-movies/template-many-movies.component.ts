import { Component, Input } from '@angular/core';
import { GeneralMovie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-template-many-movies',
  templateUrl: './template-many-movies.component.html',
  styleUrls: ['./template-many-movies.component.css']
})
export class TemplateManyMoviesComponent {
  @Input() titulo: string ="";
  @Input() movies: GeneralMovie[] =[]; 

  constructor() { }

  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path);
  }
}
