import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CategoriasPageComponent } from './categorias-page.component';
import { TemplateManyMoviesComponent } from "../template-many-movies/template-many-movies.component";
import { UserService } from '../../services/user.service';
import { MoviesService } from '../../services/movies.service';
import { Auth } from '@angular/fire/auth';
import { GeneralMovie } from '../../interfaces/interfaces';
import { of } from 'rxjs';

describe('CategoriasPageComponent', () => {
  let component: CategoriasPageComponent;
  let fixture: ComponentFixture<CategoriasPageComponent>;
  let moviesService: MoviesService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasPageComponent , TemplateManyMoviesComponent],
      imports: [ HttpClientTestingModule ],
      providers: [
        UserService,
        MoviesService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'action'
              }
            }
          }
        },
        {
          provide: Auth,
          useValue: {}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasPageComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });
  it('deberia traer las peliculas por genero en on init', () => {
    // Mockear la respuesta del servicio MoviesService
    const movies: GeneralMovie[] = [
      {
        id: 1,
        original_language: 'en',
        original_title: 'Movie 1',
        overview: 'Overview of movie 1',
        poster_path: 'path/to/poster1.jpg',
        release_date: '2022-01-01',
        vote_average: 8,
        budget: 1000000,
        genre_names: ['Action']
      },
      {
        id: 2,
        original_language: 'en',
        original_title: 'Movie 2',
        overview: 'Overview of movie 2',
        poster_path: 'path/to/poster2.jpg',
        release_date: '2022-02-01',
        vote_average: 7,
        budget: 2000000,
        genre_names: ['Action', 'Drama']
      }
    ];
    spyOn(moviesService, 'getPerCategory').and.returnValue(of(movies));

    component.ngOnInit();

    expect(component.gender).toEqual('action'); 
    expect(component['moviesService'].getPerCategory).toHaveBeenCalled(); 
    expect(component.moviesByGender).toEqual(movies.filter(movie => movie.poster_path)); 
  });
  it('deberia llamar refreshFirebaseToken() y getHeaders() en on ngOnInit()', () => {
    const userService = TestBed.inject(UserService);
    spyOn(userService, 'refreshFirebaseToken').and.callThrough();//el método espiado se ejecuta normalmente y devuelve su valor original, en lugar de ser interceptado por el espía
    spyOn(userService, 'getHeaders').and.callThrough();
  
    component.ngOnInit();
  
    expect(userService.refreshFirebaseToken).toHaveBeenCalled();
    expect(userService.getHeaders).toHaveBeenCalled();
  });
  it('deberia llamar getPerCategory() en on ngOnInit() con los parámetros correctos', () => {
    const moviesService = TestBed.inject(MoviesService);
    spyOn(moviesService, 'getPerCategory').and.returnValue(of([]));
    const userService = TestBed.inject(UserService);
    spyOn(userService, 'refreshFirebaseToken').and.callThrough();
    spyOn(userService, 'getHeaders').and.callThrough();
  
    component.ngOnInit();
  
    const expectedHeaders = userService.getHeaders();
    const expectedGender = 'action';
    expect(moviesService.getPerCategory).toHaveBeenCalledWith(expectedHeaders, expectedGender);
  });  
  it('debería devolver los resultados esperados cuando se llama con los parámetros correctos', () => {
    // Arrange
    const movies: GeneralMovie[] = [
      {
        id: 1,
        original_language: 'en',
        original_title: 'Movie 1',
        overview: 'Overview of movie 1',
        poster_path: 'path/to/poster1.jpg',
        release_date: '2022-01-01',
        vote_average: 8,
        budget: 1000000,
        genre_names: ['Action']
      },
      {
        id: 2,
        original_language: 'en',
        original_title: 'Movie 2',
        overview: 'Overview of movie 2',
        poster_path: 'path/to/poster2.jpg',
        release_date: '2022-02-01',
        vote_average: 7,
        budget: 2000000,
        genre_names: ['Action', 'Drama']
      }
    ];
    const expectedHeaders = new HttpHeaders({ Authorization: 'Bearer token' });
    const expectedGender = 'action';
    spyOn(component['userService'], 'getHeaders').and.returnValue(expectedHeaders);
    spyOn(component['moviesService'], 'getPerCategory').and.returnValue(of(movies));
  
    component.ngOnInit();
  
    expect(component.moviesByGender).toEqual(movies);
    expect(component['userService'].getHeaders).toHaveBeenCalled();
    expect(component['moviesService'].getPerCategory).toHaveBeenCalledWith(expectedHeaders, expectedGender);
  });
  // it('should render the list of movies correctly', () => {
  //   const movies: GeneralMovie[] = [
  //     {
  //       id: 1,
  //       original_language: 'en',
  //       original_title: 'Movie 1',
  //       overview: 'This is a movie',
  //       poster_path: 'poster1.jpg',
  //       release_date: '2021-01-01',
  //       vote_average: 7.5,
  //       budget: 1000,
  //       genre_names: ['Action', 'Drama']
  //     },
  //     {
  //       id: 2,
  //       original_language: 'en',
  //       original_title: 'Movie 2',
  //       overview: 'This is another movie',
  //       poster_path: 'poster2.jpg',
  //       release_date: '2021-01-02',
  //       vote_average: 8.0,
  //       budget: 2000,
  //       genre_names: ['Comedy']
  //     }
  //   ];
  //   component.movies = movies;
  //   fixture.detectChanges();
  //   const movieElements = fixture.nativeElement.querySelectorAll('.image-container');
  //   expect(movieElements.length).toBe(2);
  //   expect(movieElements[0].querySelector('.image-text').textContent).toContain('Movie 1');
  //   expect(movieElements[0].querySelector('img').getAttribute('src')).toContain('https://image.tmdb.org/t/p/w185/poster1.jpg');
  //   expect(movieElements[1].querySelector('.image-text').textContent).toContain('Movie 2');
  //   expect(movieElements[1].querySelector('img').getAttribute('src')).toContain('https://image.tmdb.org/t/p/w185/poster2.jpg');
  // });
  
});