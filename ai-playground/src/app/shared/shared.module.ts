import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeeplearnConvolutionalVisualiserComponent} from './components/deeplearn-convolutional-visualiser/deeplearn-convolutional-visualiser.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeeplearnConvolutionalVisualiserComponent],
  exports: [DeeplearnConvolutionalVisualiserComponent]
})
export class SharedModule {
}
