import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailedMovie, GeneralMovie } from 'src/app/interfaces/interfaces';

interface categories {
  id: number;
  name: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories: categories[] = [];
  private _http: HttpClient;

  constructor(private http: HttpClient) {
    this._http = http;
  }

  ngOnInit(): void {
    this._http.get<categories[]>('http://localhost:3001/moviegenders')
      .subscribe(data => {
        this.categories = data;
      });
  }

  isPeliculasExpanded: boolean = false;
  isGenerosPeliculasExpanded: boolean = false;

  handleMousePeliculas = () => this.isPeliculasExpanded = !this.isPeliculasExpanded;
  handleMouseGeneros = () => this.isGenerosPeliculasExpanded = !this.isGenerosPeliculasExpanded;

  // movie: GeneralMovie = {
  //   id: 81774,
  //   original_language: "fr",
  //   original_title: "Les Exploits d'un jeune Don Juan",
  //   overview: "Roger is a 16-year-old who seeks to lose his virginity in this erotic drama. His initial efforts are unsuccessful, but World War I breaks out and men are seen marching off to battle. Roger goes overboard when he is presented with several amorous opportunities.",
  //   poster_path: "/xvtRgQIRegLjsjaIkKQbh0hk3Qy.jpg",
  //   release_date: "1986-11-04",
  //   vote_average: 5.7,
  //   budget: 0,
  //   genre_names: [
  //     "Comedy",
  //     "Drama"
  //   ]
  // };
}
