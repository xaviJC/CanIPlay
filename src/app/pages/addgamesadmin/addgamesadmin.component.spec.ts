import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgamesadminComponent } from './addgamesadmin.component';

describe('AddgamesadminComponent', () => {
  let component: AddgamesadminComponent;
  let fixture: ComponentFixture<AddgamesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgamesadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgamesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
