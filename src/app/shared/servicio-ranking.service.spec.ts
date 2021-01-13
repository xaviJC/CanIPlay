import { TestBed } from '@angular/core/testing';

import { ServicioRankingService } from './servicio-ranking.service';

describe('ServicioRankingService', () => {
  let service: ServicioRankingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRankingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
