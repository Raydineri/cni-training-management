import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierrecuufrComponent } from './dossierrecuufr.component';

describe('DossierrecuufrComponent', () => {
  let component: DossierrecuufrComponent;
  let fixture: ComponentFixture<DossierrecuufrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierrecuufrComponent]
    });
    fixture = TestBed.createComponent(DossierrecuufrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
