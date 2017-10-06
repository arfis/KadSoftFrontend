import { TestBed, inject } from '@angular/core/testing';

import { InterceptorServiceService } from './interceptor-service.service';

describe('InterceptorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InterceptorServiceService]
    });
  });

  it('should be created', inject([InterceptorServiceService], (service: InterceptorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
