import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrenosPageComponent } from './estrenos-page.component';

describe('EstrenosPageComponent', () => {
  let component: EstrenosPageComponent;
  let fixture: ComponentFixture<EstrenosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstrenosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstrenosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
