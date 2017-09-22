import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Session, Tensor} from 'deeplearn';

@Component({
  selector: 'aip-deeplearn-convolutional-visualiser',
  templateUrl: './deeplearn-convolutional-visualiser.component.html',
  styleUrls: ['./deeplearn-convolutional-visualiser.component.scss']
})
export class DeeplearnConvolutionalVisualiserComponent implements OnInit {

  @ViewChild('container')
  private container: ElementRef;

  @Input()
  private visualisationInfos: DeeplearnVisualisationInfo[] = [];

  @Input()
  private session: Session;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * calculate visualisation
   */
  calculateVisualisation() {
    if (this.session.activationArrayMap.size() > 0) {
      this.container.nativeElement.innerHTML = '';
      console.debug(this.session.activationArrayMap)
      for (let info of this.visualisationInfos) {
        let el = document.createElement('div');
        this.container.nativeElement.appendChild(el);

        if (info.tensor.shape.length == 3) {
          this.calculateConvolutionVisualisation(info, el)
        } else {
          this.visualiseDense(info, el)
        }
      }
    }
  }

  /**
   * visualise convolutional layers
   * @param {DeeplearnVisualisationInfo} info
   * @param {HTMLElement} container
   */
  private calculateConvolutionVisualisation(info: DeeplearnVisualisationInfo, container: HTMLElement) {
    let numFilters = info.tensor.shape[2];
    let width = info.tensor.shape[0];
    let height = info.tensor.shape[1];
    let activation :any = this.session.activationArrayMap.get(info.tensor).getValues();
    let block = this.session.activationArrayMap.get(info.tensor).as3D(width, height, numFilters);
    let max = Math.max(...Array.prototype.slice.apply(activation));

    for (let i = 0; i < numFilters; i++) {
      let canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext('2d');
      let data = [];

      for (let j = 0; j < width; j++) {

        for (let h =0 ; h < height; h++) {
          data.push(0);
          data.push(0);
          data.push(0);
          data.push(Math.floor(255 * activation[block.locToIndex([j, h, i])] / max))
        }

      }

      ctx.putImageData(new ImageData(Uint8ClampedArray.of(...data), width, height), 0, 0);
      canvas.style.width = (width * 5) + 'px';
      canvas.style.height = (height * 5) + 'px';
      canvas.classList.add('vis');
      container.appendChild(canvas);
    }
  }

  /**
   * calculate visualisation of fully connected layer
   * @param {DeeplearnVisualisationInfo} info
   * @param {HTMLElement} container
   */
  visualiseDense(info: DeeplearnVisualisationInfo, container: HTMLElement) {
    let activation = this.session.activationArrayMap.get(info.tensor).getValues();
    let width = info.tensor.shape[0];

    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height= 1;
    canvas.classList.add('vis');
    canvas.style.height = "20px";
    canvas.style.width = width + "px";
    let ctx = canvas.getContext('2d');
    let max = Math.max(...Array.prototype.slice.apply(activation));
    let data = [];

    for(let i = 0; i < activation.length; i++) {
      data.push(0);
      data.push(0);
      data.push(0);
      data.push(Math.floor(255 * activation[i] / max));
    }

    ctx.putImageData(new ImageData(Uint8ClampedArray.of(...data), width, 1), 0, 0);

    container.appendChild(canvas);
  }

}

export interface DeeplearnVisualisationInfo {
  name: string,
  tensor: Tensor;
}
