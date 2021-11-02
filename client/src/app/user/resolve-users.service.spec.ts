import { TestBed } from '@angular/core/testing';

import { ResolveUsersService } from './resolve-users.service';

describe('ResolveUsersService', () => {
  let service: ResolveUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
