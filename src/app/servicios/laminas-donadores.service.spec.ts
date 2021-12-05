import { TestBed } from '@angular/core/testing';

import { LaminasDonadoresService } from './laminas-donadores.service';

describe('LaminasDonadoresService', () => {
  let service: LaminasDonadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaminasDonadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});