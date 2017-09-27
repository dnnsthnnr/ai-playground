import {GPGPUContext, Graph, NDArrayMath, NDArrayMathCPU, NDArrayMathGPU, Session, Tensor} from 'deeplearn';
import {EventEmitter} from '@angular/core';

export abstract class DeeplearnModelService {

  protected inputTensor: Tensor;

  protected predictionTensor: Tensor;

  protected _modelLoaded = false;

  protected g: Graph = new Graph;

  private _math: NDArrayMath;

  protected session: Session;

  protected modelReady: Promise<any>;

  protected _predictionFinished = new EventEmitter();

  constructor() {
    try {
      this._math = new NDArrayMathGPU();
      console.debug('using gpu')
    } catch (err) {
      console.debug('using cpu');
      this._math = new NDArrayMathCPU();
    }
  }

  public loadModel(args): any {
  }

  public predict(data: any) {
  }

  // getter and setter

  get predictionFinished(): EventEmitter<any> {
    return this._predictionFinished;
  }

  get math(): NDArrayMath {
    return this._math;
  }

  set math(value: NDArrayMath) {
    this._math = value;
  }

  get modelLoaded(): boolean {
    return this._modelLoaded;
  }
}
