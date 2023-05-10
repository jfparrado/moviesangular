import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EstrenosPreviewComponent } from './estrenos-preview.component';
import { MoviesService } from '../../services/movies.service';
import { GeneralMovie } from '../../interfaces/interfaces';
import { of } from 'rxjs';
import { TemplatePreviewComponent } from '../template-preview/template-preview.component';

describe('EstrenosPreviewComponent', () => {
  let component: EstrenosPreviewComponent;
  let fixture: ComponentFixture<EstrenosPreviewComponent>;
  let moviesService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstrenosPreviewComponent, TemplatePreviewComponent],
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrenosPreviewComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
  });

  it('Deberia crear el componente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('Deberia traerse traer peliculas que tengan poster', () => {
    const movieWithPoster1: GeneralMovie = { id: 1, poster_path: 'poster1.jpg', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 };
    const movieWithPoster2: GeneralMovie = { id: 2, poster_path: 'poster2.jpg', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 };
    const movieWithoutPoster: GeneralMovie = { id: 3, poster_path: '', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 };
    const movies: GeneralMovie[] = [movieWithPoster1, movieWithoutPoster, movieWithPoster2];

    spyOn(moviesService, 'getEstrenosPreview').and.returnValue(of(movies));

    component.ngOnInit();

    expect(moviesService.getEstrenosPreview).toHaveBeenCalled();
    expect(component.moviesWithPoster).toEqual([movieWithPoster1, movieWithPoster2]);
  });
});