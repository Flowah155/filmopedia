import { TestBed } from '@angular/core/testing';

import { ProximosestrenosService } from './proximosestrenos.service';

describe('ProximosestrenosService', () => {
  let service: ProximosestrenosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProximosestrenosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
