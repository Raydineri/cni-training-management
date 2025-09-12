import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierenvoyeufrComponent } from './dossierenvoyeufr.component';

describe('DossierenvoyeufrComponent', () => {
  let component: DossierenvoyeufrComponent;
  let fixture: ComponentFixture<DossierenvoyeufrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierenvoyeufrComponent]
    });
    fixture = TestBed.createComponent(DossierenvoyeufrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
