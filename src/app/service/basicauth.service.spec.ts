import { TestBed } from '@angular/core/testing';

import { BasicauthService } from './basicauth.service';

describe('BasicauthService', () => {
  let service: BasicauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
