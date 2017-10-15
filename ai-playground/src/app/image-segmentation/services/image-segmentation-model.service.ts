import {Injectable} from '@angular/core';
import {DeeplearnModelService} from '../../shared/utils/deeplearn-model-service';
import {Array2D, Array3D, CheckpointLoader, NDArrayMathCPU, NDArrayMathGPU} from 'deeplearn';

@Injectable()
export class ImageSegmentationModelService extends DeeplearnModelService {

  variables: any;

  private _maskDimensions = [64, 64];

  private _inputDimensions = [256, 256];

  private _classes = [
    {
      name: 'background/unlabeled',
      color: [0, 0, 0, 10]
    },
    {
      name: 'person',
      color: [255, 0, 0, 200]
    },
    {
      name: 'airplane',
      color: [0, 255, 0, 200]
    },
    {
      name: 'bicycle',
      color: [0, 255, 0, 200]
    },
    {
      name: 'boat',
      color: [0, 0, 0, 255]
    },
    {
      name: 'bus',
      color: [0, 0, 0, 255]
    },
    {
      name: 'car',
      color: [0, 0, 0, 255]
    },
    {
      name: 'motorbike',
      color: [0, 0, 0, 255]
    },
    {
      name: 'train',
      color: [0, 0, 0, 255]
    },
    {
      name: 'bird',
      color: [0, 0, 0, 255]
    },
    {
      name: 'cat',
      color: [0, 0, 0, 255]
    },
    {
      name: 'cow',
      color: [0, 0, 0, 255]
    },
    {
      name: 'dog',
      color: [0, 0, 0, 255]
    },
    {
      name: 'horse',
      color: [0, 0, 0, 255]
    },
    {
      name: 'sheep',
      color: [0, 0, 0, 255]
    }
  ];

  constructor() {
    super();
    this.math = new CustomCPUMath();
    this.math.enableDebugMode()

    let t = Array2D.new([5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9,10]);

    console.debug(t, t.getValues());
    (<CustomCPUMath>this.math).cSoftmax(t)
  }

  loadModel(args?) {
    if (!this._modelLoaded) {
      this.modelReady = new Promise<any>((resolve => {
        let loader = new CheckpointLoader(document.baseURI + '/assets/deeplearn/image_segmentation/');
        loader.getAllVariables().then((vars) => {
          this.variables = vars;
          resolve()
        })
      }))
    }
  }

  predict(args) {
    let concat_axis = 2;
    let r = this.math.scope(() => {
      const conv1 = this.conv_block(args, 1);
      console.debug('conv1 block');
      const conv2 = this.conv_block(conv1, 3);
      console.debug('conv2 block');
      const conv3 = this.conv_block(conv2, 5);
      console.debug('conv3 block');
      const conv4 = this.conv_block(conv3, 7);
      console.debug('conv4 block');
      const conv5 = this.conv_block(conv4, 9);
      console.debug('conv5 block');
      const conv6 = this.conv_block(conv5, 11);
      console.debug('conv6 block');
      const conv7 = this.conv_block(conv6, 13);

      let d = this.conv_transpose_block(conv7, 15, 1);
      let cc = this.math.concat3D(conv6, d, concat_axis);
      d = this.conv_transpose_block(cc, 17, 2);
      cc = this.math.concat3D(conv5, d, concat_axis);
      d = this.conv_transpose_block(cc, 19, 3);
      cc = this.math.concat3D(conv4, d, concat_axis);
      d = this.conv_transpose_block(cc, 21, 4);
      cc = this.math.concat3D(conv3, d, concat_axis);
      d = this.conv_transpose_block(cc, 23, 5);
      cc = this.math.concat3D(conv2, d, concat_axis);
      const r_channels = this.math.conv2d(cc, this.variables['conv2d_25/kernel'],
        this.variables['conv2d_25/bias'], [1, 1], 'same');
      const reshape = r_channels.reshape([(this._maskDimensions[0] * this._maskDimensions[1]), this._classes.length]);
      const softmax = (<CustomCPUMath>this.math).cSoftmax(<Array2D>reshape);
      return softmax.reshape([this._maskDimensions[0], this._maskDimensions[1], 1])
    });

    return r;
  }

  private conv_block(input, index) {
    const conv1 = this.math.conv2d(input, this.variables['conv2d_' + index + '/kernel'],
      this.variables['conv2d_' + index + '/bias'], [1, 1], 'same');
    const relu1 = this.math.relu(conv1);
    const conv2 = this.math.conv2d(relu1, this.variables['conv2d_' + (index + 1) + '/kernel'],
      this.variables['conv2d_' + (index + 1) + '/bias'], [1, 1], 'same');
    const relu2 = this.math.relu(conv2);
    return this.math.maxPool(relu2, [2, 2], [2, 2], 0)
  }

  private conv_transpose_block(input, conv_index, convt_index) {
    const conv1 = this.math.conv2d(input, this.variables['conv2d_' + conv_index + '/kernel'],
      this.variables['conv2d_' + conv_index + '/bias'], [1, 1], 'same');
    const relu1 = this.math.relu(conv1);
    const conv2 = this.math.conv2d(relu1, this.variables['conv2d_' + (conv_index + 1) + '/kernel'],
      this.variables['conv2d_' + (conv_index + 1) + '/bias'], [1, 1], 'same');
    const relu2 = this.math.relu(conv2);
    let [height, width, depth] = relu2.shape;
    let t_kernel = this.variables['conv2d_transpose_' + convt_index + '/kernel'];
    const convt = this.math.conv2dTranspose(relu2, t_kernel,
      [height * 2, width * 2, t_kernel.shape[2]], [2, 2], 'same');

    return this.math.relu(convt);
  }

  // getter

  get maskDimensions(): number[] {
    return this._maskDimensions;
  }

  get inputDimensions(): number[] {
    return this._inputDimensions;
  }

  get classes(): any {
    return this._classes;
  }
}

class CustomCPUMath extends NDArrayMathGPU {

  /**
   * argmax with softmax combined
   * @param {Array2D} array
   * @returns {Array2D}
   */
  cSoftmax(array: Array2D,): Array2D {
    let r = Array2D.zeros([array.shape[0], 1]);
    let axis = 1;

    let softmaxShape = array.shape.slice();
    softmaxShape[0] = 1;

    let beginShape: [number, number] = [0, 0];
    for (let i = 0; i < array.shape[0]; i++) {
      beginShape[0] = i;
      let inp = this.slice2D(array, beginShape, <[number, number]>softmaxShape);
      let s = this.softmax(inp.as1D());

      let max = this.argMax(s).get();
      r.set(max, i, 0);

      // console.debug(inp.getValues(), s.getValues(), max)

      //
      // for (let j = 0; j < s.length; j++) {
      //   // fill result array
      //   let idx = [j, j];
      //   idx[axis] = i;
      //
      //   r.set(s[j], idx[0], idx[1]);
      // }

    }

    console.debug(r.getValues());

    return r;
  }

}
