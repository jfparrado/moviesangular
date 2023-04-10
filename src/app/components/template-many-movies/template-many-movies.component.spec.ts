import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateManyMoviesComponent } from './template-many-movies.component';

describe('TemplateManyMoviesComponent', () => {
  let component: TemplateManyMoviesComponent;
  let fixture: ComponentFixture<TemplateManyMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateManyMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateManyMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
