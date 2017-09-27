import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StyleTransferRootComponent} from './components/style-transfer-root/style-transfer-root.component';
import {RouterModule} from '@angular/router';
import {StyleTransferModelService} from './services/style-transfer-model.service';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NotSupportedComponent} from './components/not-supported/not-supported.component';
import {GPUAvailableResolverService} from './services/gpuavailable-resolver.service';
import {SharedModule} from '../shared/shared.module';
import {IOSBlockerService} from '../shared/services/iosblocker.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: StyleTransferRootComponent,
        canActivate: [IOSBlockerService, GPUAvailableResolverService]
      },
      {
        path: 'not-supported',
        component: NotSupportedComponent
      }
    ])
  ],
  declarations: [StyleTransferRootComponent, NotSupportedComponent],
  providers: [
    StyleTransferModelService,
    GPUAvailableResolverService,
  ]
})
export class StyleTransferModule {
}
