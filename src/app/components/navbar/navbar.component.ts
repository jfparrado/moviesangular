import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { categories, GeneralMovie } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';

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

  constructor(
    private userService: UserService,
    private http: HttpClient, 
    private router: Router, 
    private cdr: ChangeDetectorRef) {
    this._http = http;
    
  }
  public get isUserLoggedIn(): boolean {
    return this.userService.isLoggedIn();
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

  onLogOut() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/'])
      })
      .catch(() => { })
  }

  onLogIn() {
    this.router.navigate(['/login'])
  }

  handleEnter(movieName: string): void {
    if (movieName !== '') {
      const sanitizedValue = this.sanitize(movieName);
      this.http.get<GeneralMovie[]>('http://localhost:3001/search/' + sanitizedValue).subscribe((data) => {
        this.moviesByName = data;
        this.router.navigateByUrl('/search/' + sanitizedValue);
      }, error => { });
    }
  }

  sanitize(value: string): string {
    // Remover cualquier caracter peligroso
    return value.replace(/[^a-z0-9\s]/gi, '');
  }
}
