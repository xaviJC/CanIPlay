import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginajuegoComponent } from './paginajuego.component';

describe('PaginajuegoComponent', () => {
  let component: PaginajuegoComponent;
  let fixture: ComponentFixture<PaginajuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginajuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginajuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
