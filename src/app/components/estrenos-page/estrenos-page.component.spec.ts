import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Auth } from '@angular/fire/auth';
import { of } from 'rxjs';

import { EstrenosPageComponent } from './estrenos-page.component';
import { MoviesService } from '../../services/movies.service';
import { TemplateManyMoviesComponent } from '../template-many-movies/template-many-movies.component';
import { UserService } from 'src/app/services/user.service';
import { GeneralMovie } from '../../interfaces/interfaces';

describe('EstrenosPageComponent', () => {
  let component: EstrenosPageComponent;
  let fixture: ComponentFixture<EstrenosPageComponent>;
  let moviesService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstrenosPageComponent, TemplateManyMoviesComponent],
      imports: [HttpClientTestingModule],
      providers: [
        UserService,
        MoviesService,
        {
          provide: Auth,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EstrenosPageComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia traerse latestMovies con peliculas que tengan poster', () => {
    const movieWithPoster1: GeneralMovie = { id: 1, poster_path: 'poster1.jpg', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 };
    const movieWithPoster2: GeneralMovie = { id: 2, poster_path: 'poster2.jpg', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 };
    const movieWithoutPoster: GeneralMovie = { id: 3, genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 };
    const movies: GeneralMovie[] = [movieWithPoster1, movieWithoutPoster, movieWithPoster2];

    spyOn(moviesService, 'getEstrenos').and.returnValue(of(movies));

    component.ngOnInit();

    expect(moviesService.getEstrenos).toHaveBeenCalled();
    expect(component.latestMovies).toEqual([movieWithPoster1, movieWithPoster2]);
  });
});
