import { TestBed } from '@angular/core/testing';

import { CustomerhomeService } from './customerhome.service';

describe('CustomerhomeService', () => {
  let service: CustomerhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
