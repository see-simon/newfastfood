import { TestBed } from '@angular/core/testing';

import { BreakefastService } from './breakefast.service';

describe('BreakefastService', () => {
  let service: BreakefastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakefastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


