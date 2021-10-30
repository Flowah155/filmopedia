import { TestBed } from '@angular/core/testing';

import { PeliculaDetailsServiceService } from './pelicula-details-service.service';

describe(' PeliculaDetailsServiceService', () => {
  let service:  PeliculaDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject( PeliculaDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
