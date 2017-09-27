import {Injectable, NgZone} from '@angular/core';
import {DeeplearnModelService} from '../../shared/utils/deeplearn-model-service';
import {
  Array1D,
  Array3D,
  Array4D,
  CheckpointLoader,
  GPGPUContext,
  NDArray,
  NDArrayMathCPU,
  NDArrayMathGPU,
  Scalar
} from 'deeplearn';
import {getUnpackAndPreprocessInputShader, preprocessInput} from '../../shared/utils/imagenet_util';
import {async} from '@angular/core/testing';

@Injectable()
export class StyleTransformModelService extends DeeplearnModelService {

  private variables: { [varName: string]: NDArray };

  constructor() {
    super();
  }

  public loadModel(args) {
    const checkpointLoader = new CheckpointLoader(document.head.baseURI + 'assets/deeplearn/style_transfer/' + args.style + '/');
    this.modelReady = checkpointLoader.getAllVariables().then((vars) => {
      this.variables = vars;
    });
  }

  /**
   * preprocess input
   * @param {WebGLTexture} rgbTexture
   * @param {[number , number]} imageDimensions
   * @returns {Array3D}
   */
  private preprocessColorTextureToArray3D(rgbTexture: WebGLTexture, imageDimensions: [number, number]): Array3D {
    const preprocessInputShader =
      getUnpackAndPreprocessInputShader(
        this.gpgpu, [imageDimensions[0], imageDimensions[1]]);

    const preprocessResultShapeRC: [number, number] =
      [imageDimensions[0], imageDimensions[1] * 3];

    const preprocessResultTexture =
      (<NDArrayMathGPU>this.math).getTextureManager().acquireTexture(preprocessResultShapeRC);

    preprocessInput(
      this.gpgpu, preprocessInputShader, rgbTexture,
      preprocessResultTexture, preprocessResultShapeRC);
    return NDArray.make<Array3D>([imageDimensions[0], imageDimensions[1], 3], {
      texture: preprocessResultTexture,
      textureShapeRC: preprocessResultShapeRC
    });
  }

  /**
   * calculate style transfered image
   * @param args
   */
  public predict(args) {

    this.modelReady.then(() => {

      const preprocessedInput = this.preprocessColorTextureToArray3D(args.canvasTexture, args.canvasShape);

      const img = this.math.scope(() => {
        const conv1 = this.convLayer(preprocessedInput, 1, true, 0);
        const conv2 = this.convLayer(conv1, 2, true, 3);
        const conv3 = this.convLayer(conv2, 2, true, 6);
        const resid1 = this.residualBlock(conv3, 9);
        const resid2 = this.residualBlock(resid1, 15);
        const resid3 = this.residualBlock(resid2, 21);
        const resid4 = this.residualBlock(resid3, 27);
        const resid5 = this.residualBlock(resid4, 33);
        const conv_t1 = this.convTransposeLayer(resid5, 64, 2, 39);
        const conv_t2 = this.convTransposeLayer(conv_t1, 32, 2, 42);
        const conv_t3 = this.convLayer(conv_t2, 1, false, 45);
        const out_tanh = this.math.tanh(conv_t3);
        const scaled = this.math.scalarTimesArray(Scalar.new(150), out_tanh);
        const shifted = this.math.scalarPlusArray(Scalar.new(255. / 2), scaled);

        return shifted;
      });

      this.predictionFinished.emit(img);

    });
  }

  /**
   * build convolutional layer
   * @param {Array3D} input
   * @param {number} strides
   * @param {boolean} relu
   * @param {number} varId
   * @returns {Array3D}
   */
  private convLayer(input: Array3D, strides: number,
                    relu: boolean, varId: number): Array3D {
    const y = this.math.conv2d(input,
      this.variables[this.varName(varId)] as Array4D,
      null, [strides, strides], 'same');

    const y2 = this.instanceNorm(y, varId + 1);

    if (relu) {
      return this.math.relu(y2);
    }

    return y2;
  }

  /**
   * build convolutionbal transpose layer
   * @param {Array3D} input
   * @param {number} numFilters
   * @param {number} strides
   * @param {number} varId
   * @returns {Array3D}
   */
  private convTransposeLayer(input: Array3D, numFilters: number,
                             strides: number, varId: number): Array3D {
    const [height, width,]: [number, number, number] = input.shape;
    const newRows = height * strides;
    const newCols = width * strides;
    const newShape: [number, number, number] = [newRows, newCols, numFilters];

    const y = this.math.conv2dTranspose(input,
      this.variables[this.varName(varId)] as Array4D,
      newShape, [strides, strides], 'same');

    const y2 = this.instanceNorm(y, varId + 1);

    const y3 = this.math.relu(y2);

    return y3;
  }

  /**
   * residual block
   * @param {Array3D} input
   * @param {number} varId
   * @returns {Array3D}
   */
  private residualBlock(input: Array3D, varId: number): Array3D {
    const conv1 = this.convLayer(input, 1, true, varId);
    const conv2 = this.convLayer(conv1, 1, false, varId + 3);
    return this.math.addStrict(conv2, input);
  }

  /**
   * instance normalisation
   * @param {Array3D} input
   * @param {number} varId
   * @returns {Array3D}
   */
  private instanceNorm(input: Array3D, varId: number): Array3D {
    const [height, width, inDepth]: [number, number, number] = input.shape;
    const [mu, sigma_sq]: [Array3D, Array3D] = this.instanceMoments(input);
    const shift = this.variables[this.varName(varId)] as Array1D;
    const scale = this.variables[this.varName(varId + 1)] as Array1D;
    const epsilon = Scalar.new(1e-3);
    const normalized = this.math.divideStrict(this.math.subStrict(input, mu),
      this.math.sqrt(this.math.add(sigma_sq, epsilon)));
    const shifted = this.math.add(this.math.multiply(scale, normalized), shift);
    return shifted.as3D(height, width, inDepth);
  }

  /**
   * bottlenecked instance moments
   * @param {Array3D} input
   * @returns {[Array3D , Array3D]}
   */
  private instanceMoments(input: Array3D): [Array3D, Array3D] {
    const [height, width, inDepth] = input.shape;
    const hWProduct = height * width;

    // Create explicit MathCPU for unimplemented GPU operations
    const mathCPU = new NDArrayMathCPU;

    // Switch dims for easier slicing. Operation is now on CPU
    console.debug('instanceMoments: switching dims');
    const switched = mathCPU.switchDim(input, [2, 0, 1]);
    console.debug('instanceMoments: switched dims');
    const switchedValues = switched.getValues();

    // Calculate mean and variance per channel
    const means = [];
    const variances = [];
    for (let i = 0; i < inDepth; i++) {
      const curr = switchedValues.slice(i * hWProduct, (i + 1) * hWProduct);

      var sum = 0;
      for (let j = 0; j < curr.length; j++) {
        sum += curr[j];
      }
      const avg = sum / curr.length;
      means.push(avg);

      var diffSum = 0;
      for (let j = 0; j < curr.length; j++) {
        diffSum += (avg - curr[j]) * (avg - curr[j]);
      }
      variances.push(diffSum / curr.length);
    }
    console.debug('instanceMoments: calculated means and variances');

    // "Broadcast" means and variances back to original shape
    const keepDimMeans = new Array(hWProduct * inDepth);
    const keepDimVariances = new Array(hWProduct * inDepth);
    for (let i = 0; i < hWProduct; i++) {
      for (let j = 0; j < inDepth; j++) {
        keepDimMeans[i * inDepth + j] = means[j];
        keepDimVariances[i * inDepth + j] = variances[j];
      }
    }
    console.debug('instanceMoments: "Broadcasted" to orig shape');

    const meansArray = Array3D.new(input.shape, keepDimMeans);
    const variancesArray = Array3D.new(input.shape, keepDimVariances);

    return [meansArray, variancesArray];
  }

  private varName(varId: number): string {
    if (varId === 0) {
      return 'Variable';
    }
    else {
      return 'Variable_' + varId;
    }
  }

  // getter

  get gpgpu(): GPGPUContext {
    return (<NDArrayMathGPU>this.math).getGPGPUContext();
  }
}
