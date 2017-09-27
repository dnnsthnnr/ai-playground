import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SketchDrawComponent} from './components/sketch-draw/sketch-draw.component';
import {SketchRootComponent} from './/components/sketch-root/sketch-root.component';
import {SketchClassificationRoutingModule} from './sketch-classification-routing.module';
import {SketchClassifierComponent} from './components/sketch-classifier/sketch-classifier.component';
import {ChartsModule} from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SketchClassificationModelService} from './service/sketch-classification-model.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    NgbModule,
    SharedModule,
    SketchClassificationRoutingModule,
  ],
  declarations: [
    SketchDrawComponent,
    SketchRootComponent,
    SketchClassifierComponent,
  ],
  providers: [
    SketchClassificationModelService
  ]
})
export class SketchClassificationModule {


}
