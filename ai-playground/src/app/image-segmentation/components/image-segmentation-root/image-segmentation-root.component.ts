import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ImageSegmentationModelService} from '../../services/image-segmentation-model.service';
import {Array3D} from 'deeplearn';

@Component({
  selector: 'aip-image-segmentation-root',
  templateUrl: './image-segmentation-root.component.html',
  styleUrls: ['./image-segmentation-root.component.scss']
})
export class ImageSegmentationRootComponent implements OnInit {

  private _segmentExamples = [
    document.baseURI + '/assets/segmentation/plane.jpg'
  ];

  private _currentInput = this._segmentExamples[0];

  @ViewChild('inputCanvas')
  private inputImgRef: ElementRef;

  @ViewChild('segmentationCanvas')
  private maskCanvasRef: ElementRef;

  constructor(private _modelSvc: ImageSegmentationModelService) {
  }

  ngOnInit() {
    this._modelSvc.loadModel()
  }

  getInputImageData(): Array3D {
    let tmpCanvas = document.createElement('canvas');
    let ctx = tmpCanvas.getContext('2d');
    tmpCanvas.width = this._modelSvc.inputDimensions[0];
    tmpCanvas.height = this._modelSvc.inputDimensions[1];
    ctx.drawImage(this.inputImgRef.nativeElement, 0, 0);
    let imgdata = ctx.getImageData(0, 0, this._modelSvc.inputDimensions[0], this._modelSvc.inputDimensions[1]);
    let data = [];
    for (let i = 0; i < imgdata.data.length; i += 4) {
      data.push(imgdata.data[i] / 255);
      data.push(imgdata.data[i + 1] / 255);
      data.push(imgdata.data[i + 2] / 255);
    }

    return Array3D.new([this._modelSvc.inputDimensions[0], this._modelSvc.inputDimensions[0], 3], data)
  }

  triggerSegmentation() {
    let input = this.getInputImageData();
    console.debug(input);
    let mask = this._modelSvc.predict(input);
    this.drawMask(<Array3D>mask);
  }

  drawMask(data:Array3D) {
    let ctx = this.maskCanvasRef.nativeElement.getContext('2d');
    console.debug(data.getValues());
    let d= [];
    for (let i = 0; i < this.modelSvc.maskDimensions[0]; i++) {
      for (let j = 0; j < this.modelSvc.maskDimensions[1]; i++) {
        d.push(...this.modelSvc.classes[parseInt(data.get(i,j,0).toFixed())].color)
      }
    }
    ctx.putImageData(new ImageData(Uint8ClampedArray.from(d), this._modelSvc.maskDimensions[0], this._modelSvc.maskDimensions[1]))

  }

  get modelSvc(): ImageSegmentationModelService {
    return this._modelSvc;
  }

  get segmentExamples(): string[] {
    return this._segmentExamples;
  }

  get currentInput(): string {
    return this._currentInput;
  }

  set currentInput(value: string) {
    this._currentInput = value;
  }
}
