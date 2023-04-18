import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { categories, GeneralMovie} from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories: categories[] = [];
  moviesByName: GeneralMovie[] = [];
  movieName: string = '';
  private _http: HttpClient;

  constructor(private http: HttpClient, private router: Router, private cdr: ChangeDetectorRef) {
    this._http = http;
  }

  ngOnInit(): void {//esto unicamente trae los difernetes generos
    this._http.get<categories[]>('http://localhost:3001/moviegenders')
      .subscribe(data => {
        this.categories = data;
      });
  }

  isPeliculasExpanded: boolean = false;
  isGenerosPeliculasExpanded: boolean = false;
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  handleMousePeliculas = () => this.isPeliculasExpanded = !this.isPeliculasExpanded;
  handleMouseGeneros = () => this.isGenerosPeliculasExpanded = !this.isGenerosPeliculasExpanded;
  handleEnter(movieName: string): void {
    console.log("inside handleEnter");
    if (movieName !== '') {
      this.http.get<GeneralMovie[]>('http://localhost:3001/search/' + movieName).subscribe((data) => {
        this.moviesByName = data;
        this.router.navigateByUrl('/search/' + movieName);
      });
    }
  }  
}
