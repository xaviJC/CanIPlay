import { TestBed } from '@angular/core/testing';

import { ServicioTop5Service } from './servicio-top5.service';

describe('ServicioTop5Service', () => {
  let service: ServicioTop5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioTop5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
