import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Array3D} from 'deeplearn';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SketchClassificationModelService} from '../../service/sketch-classification-model.service';


@Component({
  selector: 'aip-sketch-draw',
  templateUrl: './sketch-draw.component.html',
  styleUrls: ['./sketch-draw.component.scss']
})
export class SketchDrawComponent implements AfterViewInit {

  @ViewChild('drawCanvas')
  private canvas: ElementRef;

  private ctx: CanvasRenderingContext2D;

  private _targetSize = 32;

  private isDrawing = false;

  private _waringDisplayed = true;

  private timeoutId;

  constructor(public modalSvc: NgbModal, public modelSvc: SketchClassificationModelService) {
  }

  ngAfterViewInit() {
    this.ctx = (<HTMLCanvasElement> this.canvas.nativeElement).getContext('2d');

    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 10;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
  }

  /**
   * start drawing
   * @param {MouseEvent} event
   */
  startDrawing(event: MouseEvent | TouchEvent) {
    this.isDrawing = true;
    this.ctx.beginPath();

    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }

    if (event instanceof TouchEvent) {
      let rect = this.canvas.nativeElement.getBoundingClientRect();
      this.ctx.moveTo(event.touches[0].clientX - rect.left, event.touches[0].clientY - rect.top)
    }

    if (event instanceof MouseEvent)
      this.ctx.moveTo(event.offsetX, event.offsetY);
    this.draw(event);
  }

  /**
   * draw line according to mouse position
   * @param {MouseEvent} event
   */
  draw(event: MouseEvent | TouchEvent) {
    event.preventDefault();
    if (this.isDrawing) {

      if (event instanceof MouseEvent) {
        this.ctx.lineTo(event.offsetX, event.offsetY);
      }

      if (event instanceof TouchEvent) {
        let rect = this.canvas.nativeElement.getBoundingClientRect();
        this.ctx.lineTo(event.touches[0].clientX - rect.left, event.touches[0].clientY - rect.top)
      }

      this.ctx.stroke();
    }
  }

  /**
   * stop drawing and emit draw finished event
   * with normalized and scaled image data
   */
  stopDrawing() {
    if (this.isDrawing) {
      this.isDrawing = false;
      this.ctx.closePath();

      // wait until drawing is completely finished
      this.timeoutId = window.setTimeout(() => {
        let scaled = this.scaleImageDataToTargetSize();

        this.modelSvc.predict(this.normalizeToBWImageData(scaled))
      }, 1000)

    }
  }

  /**
   * clear canvas from any drawn paths
   */
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    this.modelSvc.clearScores()
  }

  /**
   * scale image to target size and return image data
   * @returns {ImageData}
   */
  scaleImageDataToTargetSize() {
    let tempCanvas = document.createElement('canvas');
    tempCanvas.height = this._targetSize;
    tempCanvas.width = this._targetSize;
    let tempCtx: CanvasRenderingContext2D = (<CanvasRenderingContext2D> tempCanvas.getContext('2d'));

    tempCtx.drawImage(this.canvas.nativeElement, 0, 0, this._targetSize, this._targetSize);
    return tempCtx.getImageData(0, 0, this._targetSize, this._targetSize)

  }

  /**
   * transform 4 channel image data
   * to 1 channel image with values between [0, 1]
   * and transform flattened array to nested array
   * of shape (targetSize, targetSize)
   * @param {ImageData} data
   * @returns {Array}
   */
  normalizeToBWImageData(data: ImageData): Array3D {
    let resultMatrix = [], row = [];

    // increase by 4 to get to next pixel cause of RGBA channels
    for (let i = 0; i < data.data.length; i = i + 4) {
      let alphaC = data.data[i + 3] / 255.0;
      row.push([alphaC]);
      if (row.length === this._targetSize) {
        resultMatrix.push(row);
        row = [];
      }
    }
    return Array3D.new([this._targetSize, this._targetSize, 1], resultMatrix);

  }

  get targetSize(): number {
    return this._targetSize;
  }

  set targetSize(value: number) {
    this._targetSize = value;
  }

  get waringDisplayed(): boolean {
    return this._waringDisplayed;
  }

  set waringDisplayed(value: boolean) {
    this._waringDisplayed = value;
  }
}

