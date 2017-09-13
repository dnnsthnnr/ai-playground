import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CARootComponent } from './components/caroot/caroot.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: CARootComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CollisionAvoidanceRoutingModule{ }
