import { TestBed } from '@angular/core/testing';

import { RecentTrailersService } from './recent-trailers.service';

describe('RecentTrailersService', () => {
  let service: RecentTrailersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecentTrailersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
