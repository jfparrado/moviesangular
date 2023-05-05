import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneralMovie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-template-many-movies',
  templateUrl: './template-many-movies.component.html',
  styleUrls: ['./template-many-movies.component.css']
})
export class TemplateManyMoviesComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() movies: GeneralMovie[] = [];

  showNoResults: boolean = false;
  showLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    if (this.movies.length === 0) {
      setTimeout(() => {
        this.showNoResults = true;
        this.showLoading = false;
      }, 3000);
    } else {
      this.showLoading = false;
    }
  }

  getMoviesWithPosters(): GeneralMovie[] {
    return this.movies.filter(movie => movie.poster_path);
  }
}