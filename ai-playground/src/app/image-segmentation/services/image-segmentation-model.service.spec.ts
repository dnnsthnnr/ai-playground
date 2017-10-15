import { TestBed, inject } from '@angular/core/testing';

import { ImageSegmentationModelService } from './image-segmentation-model.service';

describe('ImageSegmentationModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageSegmentationModelService]
    });
  });

  it('should be created', inject([ImageSegmentationModelService], (service: ImageSegmentationModelService) => {
    expect(service).toBeTruthy();
  }));
});
