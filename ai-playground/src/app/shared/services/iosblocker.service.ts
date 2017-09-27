import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class IOSBlockerService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (navigator.vendor && navigator.vendor.toLowerCase().indexOf("apple") != -1) {
      this.router.navigateByUrl('/ios-not-supported', {skipLocationChange: true})
    } else {

      return true;
    }
  }

}
