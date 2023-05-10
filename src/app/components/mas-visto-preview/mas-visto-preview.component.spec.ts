import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MasVistoPreviewComponent } from './mas-visto-preview.component';
import { MoviesService } from '../../services/movies.service';
import { GeneralMovie } from '../../interfaces/interfaces';
import { of } from 'rxjs';
import { TemplatePreviewComponent } from '../template-preview/template-preview.component';

describe('MasVistoPreviewComponent', () => {
  let component: MasVistoPreviewComponent;
  let fixture: ComponentFixture<MasVistoPreviewComponent>;
  let moviesService: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MasVistoPreviewComponent, TemplatePreviewComponent],
      imports: [HttpClientTestingModule],
      providers: [MoviesService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasVistoPreviewComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Deberia crear el componente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Deberia hacer unn HTTP request y actualizar el array de peliculas', () => {
    const mockResponse: GeneralMovie[] = [
      { id: 1, poster_path: 'poster1.jpg', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 },
      { id: 2, genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 },
      { id: 3, poster_path: 'poster3.jpg', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne(`${moviesService.basicUrl}topranked`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
    httpMock.verify();
    expect(component.movies).toEqual(mockResponse);
    expect(component.moviesWithPoster).toEqual([{ id: 1, poster_path: 'poster1.jpg', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 }, { id: 3, poster_path: 'poster3.jpg', genre_names: [], original_language: '', original_title: '', overview: '', release_date: '', vote_average: 0, budget: 0 }]);
  });
});
