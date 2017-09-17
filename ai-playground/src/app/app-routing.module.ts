import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RoadmapComponent} from './components/roadmap/roadmap.component';
import {AppComponent} from './components/app/app.component';
import {IndexPageComponent} from './components/index-page/index-page.component';

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
            path: 'sketch',
            loadChildren: 'app/sketch-classification/sketch-classification.module#SketchClassificationModule'
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
