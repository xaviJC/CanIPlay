import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginasugerirComponent } from './paginasugerir.component';

describe('PaginasugerirComponent', () => {
  let component: PaginasugerirComponent;
  let fixture: ComponentFixture<PaginasugerirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginasugerirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginasugerirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
