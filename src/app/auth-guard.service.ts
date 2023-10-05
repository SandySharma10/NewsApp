import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
@Injectable({ providedIn: 'root'})
export class AuthGaurdService implements CanActivate {
    constructor(private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
      const istoken=localStorage.getItem("token")?true:false;
        if(!istoken) {
            this.router.navigate(['login']);
            return false;
        }  
          return true;

    }

}