import { TestBed, inject } from '@angular/core/testing';

import { StyleTransferModelService } from './style-transfer-model.service';

describe('StyleTransferModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleTransferModelService]
    });
  });

  it('should be created', inject([StyleTransferModelService], (service: StyleTransferModelService) => {
    expect(service).toBeTruthy();
  }));
});
