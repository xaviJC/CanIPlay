import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugerenciasAdminComponent } from './sugerencias-admin.component';

describe('SugerenciasAdminComponent', () => {
  let component: SugerenciasAdminComponent;
  let fixture: ComponentFixture<SugerenciasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SugerenciasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SugerenciasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
