import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Array3D} from 'deeplearn';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SketchClassifierComponent} from '../sketch-classifier/sketch-classifier.component';


@Component({
  selector: 'aip-sketch-draw',
  templateUrl: './sketch-draw.component.html',
  styleUrls: ['./sketch-draw.component.scss']
})
export class SketchDrawComponent implements AfterViewInit {

  @ViewChild('drawCanvas')
  private canvas: ElementRef;

  private ctx: CanvasRenderingContext2D;

  private targetSize = 32;

  private isDrawing = false;

  private supportedClasses = SketchClassifierComponent.CLASSES;

  @Output()
  private aipOnDrawFinished = new EventEmitter();

  @Output()
  private aipOnClear = new EventEmitter();

  constructor(private modalSvc: NgbModal) {
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
  startDrawing(event: MouseEvent) {
    this.isDrawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(event.offsetX, event.offsetY);
    this.draw(event);
  }

  /**
   * draw line according to mouse position
   * @param {MouseEvent} event
   */
  draw(event: MouseEvent) {
    if (this.isDrawing) {
      this.ctx.lineTo(event.offsetX, event.offsetY);
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
      let scaled = this.scaleImageDataToTargetSize();
      this.aipOnDrawFinished.emit(this.normalizeToBWImageData(scaled));
      this.ctx.closePath();
    }
  }

  /**
   * clear canvas from any drawn paths
   */
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.aipOnClear.emit();
  }

  /**
   * scale image to target size and return image data
   * @returns {ImageData}
   */
  scaleImageDataToTargetSize() {
    let tempCanvas = document.createElement('canvas');
    tempCanvas.height = this.targetSize;
    tempCanvas.width = this.targetSize;
    let tempCtx: CanvasRenderingContext2D = (<CanvasRenderingContext2D> tempCanvas.getContext('2d'));

    tempCtx.drawImage(this.canvas.nativeElement, 0, 0, this.targetSize, this.targetSize);
    return tempCtx.getImageData(0, 0, this.targetSize, this.targetSize)

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
      if (row.length === this.targetSize) {
        resultMatrix.push(row);
        row = [];
      }
    }
    return Array3D.new([this.targetSize, this.targetSize, 1], resultMatrix);

  }
}

