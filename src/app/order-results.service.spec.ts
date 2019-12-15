import { TestBed } from '@angular/core/testing';

import { OrderResultsService } from './order-results.service';

describe('OrderResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderResultsService = TestBed.get(OrderResultsService);
    expect(service).toBeTruthy();
  });
});
