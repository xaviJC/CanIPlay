import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsugerenciasadminComponent } from './addsugerenciasadmin.component';

describe('AddsugerenciasadminComponent', () => {
  let component: AddsugerenciasadminComponent;
  let fixture: ComponentFixture<AddsugerenciasadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsugerenciasadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsugerenciasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
