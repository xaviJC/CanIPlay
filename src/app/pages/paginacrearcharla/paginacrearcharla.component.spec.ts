import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacrearcharlaComponent } from './paginacrearcharla.component';

describe('PaginacrearcharlaComponent', () => {
  let component: PaginacrearcharlaComponent;
  let fixture: ComponentFixture<PaginacrearcharlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginacrearcharlaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginacrearcharlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
