import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSegmentationRootComponent } from './components/image-segmentation-root/image-segmentation-root.component';
import {RouterModule} from '@angular/router';
import {ImageSegmentationModelService} from './services/image-segmentation-model.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ImageSegmentationRootComponent
      }
    ])
  ],
  declarations: [ImageSegmentationRootComponent],
  providers: [
    ImageSegmentationModelService
  ]
})
export class ImageSegmentationModule { }
