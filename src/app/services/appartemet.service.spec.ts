import { TestBed } from '@angular/core/testing';

import { AppartemetService } from './appartemet.service';

describe('AppartemetService', () => {
  let service: AppartemetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppartemetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
