import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SketchRootComponent} from './components/sketch-root/sketch-root.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SketchRootComponent
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SketchClassificationRoutingModule {
}
