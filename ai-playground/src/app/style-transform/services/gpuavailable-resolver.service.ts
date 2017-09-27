import { Injectable } from '@angular/core';
import {StyleTransformModelService} from './style-transform-model.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {NDArrayMathGPU} from 'deeplearn';

@Injectable()
export class GPUAvailableResolverService implements CanActivate {

  constructor(private modelSvc: StyleTransformModelService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.modelSvc.math instanceof NDArrayMathGPU) {
      return true;
    }

    console.debug(this.modelSvc.math instanceof NDArrayMathGPU);

    this.router.navigateByUrl('/style-transfer/not-supported', {skipLocationChange: true});
  }

}
