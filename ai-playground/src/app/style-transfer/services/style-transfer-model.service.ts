import {Injectable} from '@angular/core';
import {DeeplearnModelService} from '../../shared/utils/deeplearn-model-service';
import {
  Array1D, Array3D, Array4D, CheckpointLoader, GPGPUContext, NDArray, NDArrayMathCPU, NDArrayMathGPU,
  Scalar
} from 'deeplearn';

@Injectable()
export class StyleTransferModelService extends DeeplearnModelService {

  private variables: { [varName: string]: NDArray };

  constructor() {
    super();
  }

  private modelReadyMap = new Map<string, Promise<any>>();

  private currentStyle = '';

  public loadModel(args) {
    this.currentStyle = args.style;
    const checkpointLoader = new CheckpointLoader(document.head.baseURI + 'assets/deeplearn/style_transfer/' + args.style + '/');
    this.modelReadyMap[this.currentStyle] = checkpointLoader.getAllVariables().then((vars) => {
      this.variables = vars;
    });
  }


  /**
   * calculate style transfered image
   * @param args
   */
  public predict(args) {

    this.modelReadyMap[this.currentStyle].then(() => {

      const img = this.math.scope(() => {
        const conv1 = this.convLayer(args, 1, true, 1);
        const conv2 = this.convLayer(conv1, 2, true, 2);
        const conv3 = this.convLayer(conv2, 2, true, 3);
        const resid1 = this.residualBlock(conv3, 4);
        const resid2 = this.residualBlock(resid1, 6);
        const resid3 = this.residualBlock(resid2, 8);
        const resid4 = this.residualBlock(resid3, 10);
        const resid5 = this.residualBlock(resid4, 12);
        const conv_t1 = this.convTransposeLayer(resid5, 64, 2, 1, 14);
        const conv_t2 = this.convTransposeLayer(conv_t1, 32, 2, 2, 15);
        const conv_t3 = this.convLayer(conv_t2, 1, false, 16);
        const out_tanh = this.math.tanh(conv_t3);
        const shift = this.math.scalarPlusArray(Scalar.new(1), out_tanh);
        return this.math.scalarTimesArray(Scalar.new(255. / 2), shift);

      });

      console.debug(img);

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
      this.variables['conv2d_'+varId+"/kernel"] as Array4D,
      this.variables['conv2d_'+varId+"/bias"] as Array1D, [strides, strides], 'same');

    const y2 = this.math.batchNormalization3D(y, this.variables['batch_normalization_'+varId+'/moving_mean'] as Array1D,
      this.variables['batch_normalization_'+varId+'/moving_variance'] as Array1D, 1e-3, this.variables['batch_normalization_'+varId+'/gamma'] as Array1D,
      this.variables['batch_normalization_'+varId+'/beta'] as Array1D
      );

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
   * @param convt_id
   * @param conv_id
   * @returns {Array3D}
   */
  private convTransposeLayer(input: Array3D, numFilters: number,
                             strides: number, convt_id: number, conv_id:number): Array3D {
    const [height, width,]: [number, number, number] = input.shape;
    const newRows = height * strides;
    const newCols = width * strides;
    const newShape: [number, number, number] = [newRows, newCols, numFilters];

    const y = this.math.conv2dTranspose(input,
      this.variables["conv2d_transpose_"+convt_id + "/kernel"] as Array4D,
      newShape, [strides, strides], 'same');

    return this.convLayer(y, 1, true, conv_id)

  }

  /**
   * residual block
   * @param {Array3D} input
   * @param {number} varId
   * @returns {Array3D}
   */
  private residualBlock(input: Array3D, varId: number): Array3D {
    const conv1 = this.convLayer(input, 1, true, varId);
    const conv2 = this.convLayer(conv1, 1, false, varId + 1);
    return this.math.addStrict(conv2, input);
  }



  // getter

  get gpgpu(): GPGPUContext {
    return (<NDArrayMathGPU>this.math).getGPGPUContext();
  }
}
