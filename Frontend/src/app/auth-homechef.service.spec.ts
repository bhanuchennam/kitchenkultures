import { TestBed } from '@angular/core/testing';

import { AuthHomechefService } from './auth-homechef.service';

describe('AuthHomechefService', () => {
  let service: AuthHomechefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthHomechefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
