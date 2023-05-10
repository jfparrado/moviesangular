import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { MasVistoPreviewComponent } from '../mas-visto-preview/mas-visto-preview.component';
import { EstrenosPreviewComponent } from '../estrenos-preview/estrenos-preview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TemplatePreviewComponent } from '../template-preview/template-preview.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent,MasVistoPreviewComponent,EstrenosPreviewComponent,TemplatePreviewComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });
  it('Deberia contener una imagen con la clase "mainimage"', () => {
    const imgElement = fixture.nativeElement.querySelector('img.mainimage');
    expect(imgElement).toBeTruthy();
  });
});
