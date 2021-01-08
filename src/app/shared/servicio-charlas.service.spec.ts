import { TestBed } from '@angular/core/testing';

import { ServicioCharlasService } from './servicio-charlas.service';

describe('ServicioCharlasService', () => {
  let service: ServicioCharlasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCharlasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
