import { TestBed } from '@angular/core/testing';

import { PeopleServiceService } from './people-service.service';

describe('PeopleServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleServiceService = TestBed.get(PeopleServiceService);
    expect(service).toBeTruthy();
  });
});
