import {Component, ViewChild} from '@angular/core';
import {SketchClassificationModelService} from '../../service/sketch-classification-model.service';
import {DeeplearnConvolutionalVisualiserComponent} from '../../../shared/components/deeplearn-convolutional-visualiser/deeplearn-convolutional-visualiser.component';

@Component({
  selector: 'aip-sketch-root',
  templateUrl: './sketch-root.component.html',
  styleUrls: ['./sketch-root.component.scss']
})
export class SketchRootComponent {


  constructor(public modelSvc: SketchClassificationModelService) {
  }

  @ViewChild('visualiser')
  set visualiser(visualiser: DeeplearnConvolutionalVisualiserComponent) {
    if (visualiser != null)
      visualiser.calculateVisualisation();
  }

}
