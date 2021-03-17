import { TestBed } from '@angular/core/testing';

import { JwtauthenticateService } from './jwtauthenticate.service';

describe('JwtauthenticateService', () => {
  let service: JwtauthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtauthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
