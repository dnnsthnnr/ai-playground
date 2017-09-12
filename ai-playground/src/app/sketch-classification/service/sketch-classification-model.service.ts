import {EventEmitter, Injectable} from '@angular/core';
import {
  Array3D,
  CheckpointLoader,
  Graph,
  NDArrayInitializer,
  NDArrayMath,
  NDArrayMathCPU,
  NDArrayMathGPU,
  Session,
  Tensor
} from 'deeplearn';
import {sizeFromShape} from 'deeplearn/dist/src/util';

@Injectable()
export class SketchClassificationModelService {

  private inputTensor: Tensor;

  private predictionTensor: Tensor;

  private _modelLoaded = false;

  private g: Graph = new Graph();

  private _predictionFinished = new EventEmitter();

  private _classes = [
    'Circle',
    'Square',
    'Line',
    'Baseball',
    'Apple',
    'Door',
    'Book',
    'Triangle',
    'Hexagon',
    'Octagon',
    'Laptop',
    'Pizza',
    'Envelope',
    'Clock',
    'Camera',
    'Face'
  ];

  private math: NDArrayMath;

  private _classScores = [];

  private _hasScores = false;

  private modelReady: Promise<any>;

  constructor() {
    try {
      this.math = new NDArrayMathGPU();
      console.debug('using gpu')
    } catch (err) {
      console.debug(err);
      console.debug('using cpu');
      this.math = new NDArrayMathCPU();
    }
  }

  /**
   * initialize model graph and load model weights
   * @returns {Promise<any>}
   */
  public loadModel() {
    const varLoader = new CheckpointLoader(document.head.baseURI + 'assets/deeplearn/sketch_classification/');
    this.modelReady = new Promise((resolve, reject) => {
      varLoader.getAllVariables().then(vars => {
        this.inputTensor = this.g.placeholder('input', [32, 32, 1]);
        const conv1 = this.g.conv2d(this.inputTensor, this.g.constant(vars['conv2d_1/kernel']), this.g.constant(vars['conv2d_1/bias']), 3, 32, 1, 1);
        const conv1_relu = this.g.relu(conv1);
        const conv2 = this.g.conv2d(conv1_relu, this.g.constant(vars['conv2d_2/kernel']), this.g.constant(vars['conv2d_2/bias']), 3, 32, 1, 1);
        const conv2_relu = this.g.relu(conv2);
        const conv3 = this.g.conv2d(conv2_relu, this.g.constant(vars['conv2d_3/kernel']), this.g.constant(vars['conv2d_3/bias']), 3, 32, 1, 1);
        const conv3_relu = this.g.relu(conv3);
        const maxPool1 = this.g.maxPool(conv3_relu, 2, 2, 0);

        const conv4 = this.g.conv2d(maxPool1, this.g.constant(vars['conv2d_4/kernel']), this.g.constant(vars['conv2d_4/bias']), 3, 64, 1, 1);
        const conv4_relu = this.g.relu(conv4);
        const conv5 = this.g.conv2d(conv4_relu, this.g.constant(vars['conv2d_5/kernel']), this.g.constant(vars['conv2d_5/bias']), 3, 64, 1, 1);
        const conv5_relu = this.g.relu(conv5);
        const conv6 = this.g.conv2d(conv5_relu, this.g.constant(vars['conv2d_6/kernel']), this.g.constant(vars['conv2d_6/bias']), 3, 64, 1, 1);
        const conv6_relu = this.g.relu(conv6);
        const maxPool2 = this.g.maxPool(conv6_relu, 2, 2, 0);

        const conv7 = this.g.conv2d(maxPool2, this.g.constant(vars['conv2d_7/kernel']), this.g.constant(vars['conv2d_7/bias']), 3, 128, 1, 1);
        const conv7_relu = this.g.relu(conv7);
        const conv8 = this.g.conv2d(conv7_relu, this.g.constant(vars['conv2d_8/kernel']), this.g.constant(vars['conv2d_8/bias']), 3, 128, 1, 1);
        const conv8_relu = this.g.relu(conv8);
        const conv9 = this.g.conv2d(conv8_relu, this.g.constant(vars['conv2d_9/kernel']), this.g.constant(vars['conv2d_9/bias']), 3, 128, 1, 1);
        const conv9_relu = this.g.relu(conv9);
        const maxPool3 = this.g.maxPool(conv9_relu, 2, 2, 0);

        const reshape = this.g.reshape(maxPool3, [sizeFromShape(maxPool3.shape)]);
        const dense1 = this.g.layers.dense('dense1', reshape, 512, null, true, new NDArrayInitializer(vars['dense_1/kernel']), new NDArrayInitializer(vars['dense_1/bias']));
        const dense1_relu = this.g.relu(dense1);
        const dense2 = this.g.layers.dense('dense2', dense1_relu, 512, null, true, new NDArrayInitializer(vars['dense_2/kernel']), new NDArrayInitializer(vars['dense_2/bias']));
        const dense2_relu = this.g.relu(dense2);
        const dense3 = this.g.layers.dense('dense3', dense2_relu, 16, null, true, new NDArrayInitializer(vars['dense_3/kernel']), new NDArrayInitializer(vars['dense_3/bias']));
        this.predictionTensor = this.g.softmax(dense3);

        this._modelLoaded = true;

        resolve()
      }).catch((err) => {
        reject(err);
      })
    })
  }


  /**
   * let the model predict
   * @param data
   */
  predict(data: Array3D) {
    this._classScores = [];

    this.modelReady.then(() => {

      const sess = new Session(this.g, this.math);

      this.math.scope((keep, track) => {
        const mapping = [{
          tensor: this.inputTensor,
          data: data
        }];

        const result = sess.eval(this.predictionTensor, mapping);

        let tmpClassScores = [];
        result.getValues().forEach((score, index) => {
          tmpClassScores.push(Math.round(score * 100));
        });


        this._classScores = tmpClassScores;
        this._hasScores = true;
        this.predictionFinished.emit()

      })

    }).catch(error => {
      console.debug(error)
    })

  }

  /**
   * clear the class scores to prevent from displaying
   */
  clearScores() {
    this._hasScores = false;
  }

  // getter

  get classes(): Array<string> {
    return this._classes;
  }

  get classScores(): Array<number> {
    return this._classScores;
  }

  get hasScores(): boolean {
    return this._hasScores;
  }

  get modelLoaded(): boolean {
    return this._modelLoaded;
  }

  get predictionFinished(): EventEmitter<any> {
    return this._predictionFinished;
  }
}
