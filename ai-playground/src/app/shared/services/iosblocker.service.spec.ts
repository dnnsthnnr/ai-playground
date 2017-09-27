import { TestBed, inject } from '@angular/core/testing';

import { IOSBlockerService } from './iosblocker.service';

describe('IOSBlockerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IOSBlockerService]
    });
  });

  it('should be created', inject([IOSBlockerService], (service: IOSBlockerService) => {
    expect(service).toBeTruthy();
  }));
});
