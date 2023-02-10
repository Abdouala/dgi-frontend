import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLigneComponent } from './service-ligne.component';

describe('ServiceLigneComponent', () => {
  let component: ServiceLigneComponent;
  let fixture: ComponentFixture<ServiceLigneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLigneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceLigneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
