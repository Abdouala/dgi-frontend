import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertProprieteComponent } from './transfert-propriete.component';

describe('TransfertProprieteComponent', () => {
  let component: TransfertProprieteComponent;
  let fixture: ComponentFixture<TransfertProprieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertProprieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfertProprieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
