import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SketchRootComponent} from './components/sketch-root/sketch-root.component';
import {IOSBlockerService} from '../shared/services/iosblocker.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SketchRootComponent,
        canActivate: [IOSBlockerService]
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SketchClassificationRoutingModule {
}
