import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesInternesComponent } from './activites-internes.component';

describe('ActivitesInternesComponent', () => {
  let component: ActivitesInternesComponent;
  let fixture: ComponentFixture<ActivitesInternesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitesInternesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitesInternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
