import { TestBed } from '@angular/core/testing';

import { SignedserviceService } from './signedservice.service';

describe('SignedserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignedserviceService = TestBed.get(SignedserviceService);
    expect(service).toBeTruthy();
  });
});
