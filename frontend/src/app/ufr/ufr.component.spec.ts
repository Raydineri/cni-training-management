import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfrComponent } from './ufr.component';

describe('UfrComponent', () => {
  let component: UfrComponent;
  let fixture: ComponentFixture<UfrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UfrComponent],
    });
    fixture = TestBed.createComponent(UfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Ajoutez d'autres tests ici en fonction des fonctionnalités de votre composant
});
