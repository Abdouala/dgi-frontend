import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceQualiteComponent } from './espace-qualite.component';

describe('EspaceQualiteComponent', () => {
  let component: EspaceQualiteComponent;
  let fixture: ComponentFixture<EspaceQualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceQualiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceQualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
