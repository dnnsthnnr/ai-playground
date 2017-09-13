import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CARootComponent } from './components/caroot/caroot.component';
import {CollisionAvoidanceRoutingModule} from './collision-avoidance-routing.module';
import {CASimulationService} from './service/casimulation.service';

@NgModule({
  imports: [
    CommonModule,

    CollisionAvoidanceRoutingModule
  ],
  declarations: [
    CARootComponent
  ],
  providers: [
    CASimulationService
  ]
})
export class CollisionAvoidanceModule { }
