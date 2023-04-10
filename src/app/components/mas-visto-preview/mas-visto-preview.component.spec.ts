import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasVistoPreviewComponent } from './mas-visto-preview.component';

describe('MasVistoPreviewComponent', () => {
  let component: MasVistoPreviewComponent;
  let fixture: ComponentFixture<MasVistoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasVistoPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasVistoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
