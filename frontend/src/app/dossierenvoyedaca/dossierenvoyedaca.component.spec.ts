import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierenvoyedacaComponent } from './dossierenvoyedaca.component';

describe('DossierenvoyedacaComponent', () => {
  let component: DossierenvoyedacaComponent;
  let fixture: ComponentFixture<DossierenvoyedacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierenvoyedacaComponent]
    });
    fixture = TestBed.createComponent(DossierenvoyedacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
