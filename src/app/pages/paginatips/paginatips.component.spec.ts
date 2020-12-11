import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatipsComponent } from './paginatips.component';

describe('PaginatipsComponent', () => {
  let component: PaginatipsComponent;
  let fixture: ComponentFixture<PaginatipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
