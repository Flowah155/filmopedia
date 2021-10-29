import { TestBed } from '@angular/core/testing';

import { PeliculaCreditsServiceService } from './pelicula-credits-service.service';

describe('PeliculaCreditsServiceService', () => {
  let service: PeliculaCreditsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliculaCreditsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
