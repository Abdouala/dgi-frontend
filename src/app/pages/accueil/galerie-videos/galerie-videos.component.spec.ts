import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieVideosComponent } from './galerie-videos.component';

describe('GalerieVideosComponent', () => {
  let component: GalerieVideosComponent;
  let fixture: ComponentFixture<GalerieVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerieVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
