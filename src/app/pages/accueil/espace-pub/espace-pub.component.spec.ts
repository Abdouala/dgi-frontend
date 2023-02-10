import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePubComponent } from './espace-pub.component';

describe('EspacePubComponent', () => {
  let component: EspacePubComponent;
  let fixture: ComponentFixture<EspacePubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspacePubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacePubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
