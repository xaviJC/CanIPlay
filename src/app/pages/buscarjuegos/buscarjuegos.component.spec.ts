import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarjuegosComponent } from './buscarjuegos.component';

describe('BuscarjuegosComponent', () => {
  let component: BuscarjuegosComponent;
  let fixture: ComponentFixture<BuscarjuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarjuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarjuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
