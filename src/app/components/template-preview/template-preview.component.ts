import { Component, Input } from '@angular/core';
import { GeneralMovie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.css']
})
export class TemplatePreviewComponent {
  @Input() titulo: string ="";
  @Input() movies: GeneralMovie[] =[]; 
  constructor() { }

  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path);
  }
}
