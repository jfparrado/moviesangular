import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrenosPreviewComponent } from './estrenos-preview.component';

describe('EstrenosPreviewComponent', () => {
  let component: EstrenosPreviewComponent;
  let fixture: ComponentFixture<EstrenosPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrenosPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrenosPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
