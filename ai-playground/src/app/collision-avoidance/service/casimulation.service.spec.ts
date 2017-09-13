import { TestBed, inject } from '@angular/core/testing';

import { CASimulationService } from './casimulation.service';

describe('CASimulationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CASimulationService]
    });
  });

  it('should be created', inject([CASimulationService], (service: CASimulationService) => {
    expect(service).toBeTruthy();
  }));
});
