import { TestBed } from '@angular/core/testing';

import { ServicioSugerenciasService } from './servicio-sugerencias.service';

describe('ServicioSugerenciasService', () => {
  let service: ServicioSugerenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSugerenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
