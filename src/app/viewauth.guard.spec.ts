import { TestBed } from '@angular/core/testing';

import { ViewauthGuard } from './viewauth.guard';

describe('ViewauthGuard', () => {
  let guard: ViewauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ViewauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
