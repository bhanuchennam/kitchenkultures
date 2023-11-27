import { TestBed } from '@angular/core/testing';

import { HomeChefService } from './home-chef.service';

describe('HomeChefService', () => {
  let service: HomeChefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeChefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
