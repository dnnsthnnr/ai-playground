import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RoadmapComponent} from './components/roadmap/roadmap.component';
import {AppComponent} from './components/app/app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        children: [
          {
            path: 'roadmap',
            component: RoadmapComponent
          },
          {
            path: 'sketch',
            loadChildren: 'app/sketch-classification/sketch-classification.module#SketchClassificationModule'
          },
          {
            path: 'collision-avoidance',
            loadChildren: 'app/collision-avoidance/collision-avoidance.module#CollisionAvoidanceModule'
          },
          {
            path: '**',
            pathMatch: 'full',
            redirectTo: '/sketch'
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
