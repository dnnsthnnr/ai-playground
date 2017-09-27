import {AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {StyleTransferModelService} from '../../services/style-transfer-model.service';
import {Array3D, NDArrayMathGPU} from 'deeplearn';

@Component({
  selector: 'aip-text-sentiment-root',
  templateUrl: './style-transfer-root.component.html',
  styleUrls: ['./style-transfer-root.component.scss']
})
export class StyleTransferRootComponent implements OnInit, AfterViewInit {

  private _contentImages = [
    {value: 'assets/styles/ghc.jpg', name: 'Gates Center at Carnegie Mellon Univeristy'},
    {value: 'assets/styles/stata.jpg', name: 'Ray and Maria Stata Center'},
    {value: 'assets/styles/scarlett.jpg', name: 'Scarlett Johansson'},
    {value: 'assets/styles/peacock.jpg', name: 'Peacock'},
    {value: 'assets/styles/chicago.jpg', name: 'Chicago'},
    {value: 'assets/styles/golden_gate.jpg', name: 'Golden Gate'},
  ];

  @ViewChild('drawCanvas')
  private resultCanvas: ElementRef;
  private resultCtx;

  @ViewChild('contentImage')
  private contentImage: ElementRef;

  private _style = 'udnie';
  private _contentSrc = 'assets/styles/stata.jpg';

  private _transferBlocked = false;

  constructor(private _modelSvc: StyleTransferModelService, private _ngZone: NgZone) {
  }


  ngOnInit() {
    this.modelSvc.loadModel({style: this._style});
    this.modelSvc.predictionFinished.subscribe((result) => {
      this._ngZone.run(() => {
        this.drawImageToCanvas(result);
        this._transferBlocked = false;
      });

    })
  }

  ngAfterViewInit() {
    this.resultCtx = this.resultCanvas.nativeElement.getContext('2d');
  }

  /**
   * initiate style transfer
   */
  transfer() {
    this._transferBlocked = true;
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        const shape: [number, number] = [this.contentImage.nativeElement.height, this.contentImage.nativeElement.width];

        const texture = (<NDArrayMathGPU>this.modelSvc.math).getTextureManager().acquireTexture(shape);
        this.modelSvc.gpgpu.uploadPixelDataToTexture(texture, this.contentImage.nativeElement);

        this.modelSvc.predict({canvasTexture: texture, canvasShape: shape});
      });
    })
  }

  /**
   * draw result to canvas
   * @param {Array3D} data
   */
  drawImageToCanvas(data: Array3D) {
    this.resultCanvas.nativeElement.width = data.shape[1];
    this.resultCanvas.nativeElement.height = data.shape[0];

    let imageData = this.resultCtx.createImageData(data.shape[1], data.shape[0]);

    let p = 0;
    for (let i = 0; i < data.shape[0]; i++) {
      for (let j = 0; j < data.shape[1]; j++) {

        imageData.data[p++] = data.get(i, j, 0);
        imageData.data[p++] = data.get(i, j, 1);
        imageData.data[p++] = data.get(i, j, 2);
        imageData.data[p++] = 255;
      }
    }

    this.resultCtx.putImageData(imageData, 0, 0);

  }

  // getter

  get modelSvc(): StyleTransferModelService {
    return this._modelSvc;
  }

  get contentImages(): ({ value: string; name: string } | { value: string; name: string } | { value: string; name: string } | { value: string; name: string } | { value: string; name: string } | { value: string; name: string })[] {
    return this._contentImages;
  }

  get style(): string {
    return this._style;
  }

  get contentSrc(): string {
    return this._contentSrc;
  }

  set contentSrc(value: string) {
    this._contentSrc = value;
  }

  get transferBlocked(): boolean {
    return this._transferBlocked;
  }
}

