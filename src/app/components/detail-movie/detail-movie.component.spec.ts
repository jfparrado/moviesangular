import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { DetailedMovie } from '../../interfaces/interfaces';
import { DetailMovieComponent } from './detail-movie.component';
import { UserService } from "../../services/user.service";
import { MoviesService } from "../../services/movies.service";
import { Auth } from '@angular/fire/auth';

describe('DetailMovieComponent', () => {
  let component: DetailMovieComponent;
  let fixture: ComponentFixture<DetailMovieComponent>;
  let userService: UserService;
  let moviesService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailMovieComponent],
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        MoviesService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { 
              paramMap: {
                get: () => '123'
              }
            }
          }
        },
        {
          provide: Auth,
          useValue: {}
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMovieComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    moviesService = TestBed.inject(MoviesService);
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia traer el detalle de las peliculas en la inicializacion', () => {
    const expectedHeaders = new HttpHeaders({ Authorization: 'Bearer token' });
    const movieData: DetailedMovie = {
      budget: 10000000,
      id: 123,
      popularity: 7.8,
      revenue: 50000000,
      runtime: 120,
      homepage: 'https://example.com',
      original_language: 'en',
      original_title: 'Example Movie',
      overview: 'This is an example movie.',
      poster_path: '/path/to/poster.jpg',
      release_date: '2023-05-01',
      vote_average: '7.5',
      status: 'Released',
      spoken_languages: ['English', 'Spanish'],
      genres: ['Action', 'Drama']
    };

    spyOn(userService, 'refreshFirebaseToken');
    spyOn(userService, 'getHeaders').and.returnValue(expectedHeaders);
    spyOn(moviesService, 'getDetails').and.returnValue(of(movieData));

    component.ngOnInit();
    const expectedId = '123';
    expect(userService.refreshFirebaseToken).toHaveBeenCalled();
    expect(userService.getHeaders).toHaveBeenCalled();
    expect(component.id).toEqual('123'); 
    expect(moviesService.getDetails).toHaveBeenCalledWith(expectedHeaders,expectedId);
    expect(component.detailMovie).toEqual(movieData);
  });
});
