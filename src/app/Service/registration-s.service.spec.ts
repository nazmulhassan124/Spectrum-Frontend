import { TestBed } from '@angular/core/testing';

import { RegistrationSService } from './registration-s.service';

describe('RegistrationSService', () => {
  let service: RegistrationSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
