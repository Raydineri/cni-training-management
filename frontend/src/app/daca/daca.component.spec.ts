import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DacaComponent } from './daca.component';

describe('DacaComponent', () => {
  let component: DacaComponent;
  let fixture: ComponentFixture<DacaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DacaComponent]
    });
    fixture = TestBed.createComponent(DacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
