import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CategoriasPageComponent } from './categorias-page.component';
import { TemplateManyMoviesComponent } from "../template-many-movies/template-many-movies.component";
import { UserService } from '../../services/user.service';
import { MoviesService } from '../../services/movies.service';
import { Auth } from '@angular/fire/auth';

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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
