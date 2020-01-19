import { TestBed } from '@angular/core/testing';

import { CompanyRegistrationService } from './company-registration.service';

describe('CompanyRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyRegistrationService = TestBed.get(CompanyRegistrationService);
    expect(service).toBeTruthy();
  });
});
