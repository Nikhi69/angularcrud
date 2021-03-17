import { TestBed } from '@angular/core/testing';

import { HttpInterceptorauthService } from './interceptorauth.service';

describe('InterceptorauthService', () => {
  let service: HttpInterceptorauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
