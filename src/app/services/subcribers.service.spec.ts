import { TestBed } from '@angular/core/testing';

import { SubcribersService } from './subcribers.service';

describe('SubcribersService', () => {
  let service: SubcribersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcribersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
