import { TestBed } from '@angular/core/testing';

import { CustomerSelectorService } from './customer-selector.service';

describe('CustomerSelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerSelectorService = TestBed.get(CustomerSelectorService);
    expect(service).toBeTruthy();
  });
});
