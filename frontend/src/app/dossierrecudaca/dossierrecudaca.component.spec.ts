import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierrecudacaComponent } from './dossierrecudaca.component';

describe('DossierrecudacaComponent', () => {
  let component: DossierrecudacaComponent;
  let fixture: ComponentFixture<DossierrecudacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DossierrecudacaComponent]
    });
    fixture = TestBed.createComponent(DossierrecudacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
