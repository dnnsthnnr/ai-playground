import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RoadmapComponent} from './components/roadmap/roadmap.component';
import {AppComponent} from './components/app/app.component';
import {IndexPageComponent} from './components/index-page/index-page.component';
import {IOSNotSupportedComponent} from './components/iosnot-supported/iosnot-supported.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        children: [
          {
            path: "",
            component: IndexPageComponent
          },
          {
            path: 'roadmap',
            component: RoadmapComponent
          },
          {
            path: 'ios-not-supported',
            component: IOSNotSupportedComponent
          },
          {
            path: 'sketch',
            loadChildren: 'app/sketch-classification/sketch-classification.module#SketchClassificationModule'
          },
          {
            path: 'style-transfer',
            loadChildren: 'app/style-transform/style-transform.module#StyleTransformModule'
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: '/'
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
