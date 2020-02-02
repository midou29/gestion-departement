import { TestBed } from '@angular/core/testing';

import { AttributionService } from './attribution.service';

describe('AttributionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttributionService = TestBed.get(AttributionService);
    expect(service).toBeTruthy();
  });
});
