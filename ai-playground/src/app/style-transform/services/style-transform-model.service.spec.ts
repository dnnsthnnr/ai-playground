import { TestBed, inject } from '@angular/core/testing';

import { StyleTransformModelService } from './style-transform-model.service';

describe('StyleTransformModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleTransformModelService]
    });
  });

  it('should be created', inject([StyleTransformModelService], (service: StyleTransformModelService) => {
    expect(service).toBeTruthy();
  }));
});
