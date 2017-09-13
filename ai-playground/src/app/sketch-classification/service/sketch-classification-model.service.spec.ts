import {inject, TestBed} from '@angular/core/testing';

import {SketchClassificationModelService} from './sketch-classification-model.service';

describe('SketchClassificationModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SketchClassificationModelService]
    });
  });

  it('should be created', inject([SketchClassificationModelService], (service: SketchClassificationModelService) => {
    expect(service).toBeTruthy();
  }));
});
