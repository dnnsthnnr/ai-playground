import { TestBed, inject } from '@angular/core/testing';

import { GPUAvailableResolverService } from './gpuavailable-resolver.service';

describe('GPUAvailableResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GPUAvailableResolverService]
    });
  });

  it('should be created', inject([GPUAvailableResolverService], (service: GPUAvailableResolverService) => {
    expect(service).toBeTruthy();
  }));
});
