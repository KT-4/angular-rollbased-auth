import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

 constructor(
  private router:Router,
  private authService:AuthService
 ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){   
       
      const user = this.authService.userValue;

      if(user){
        if(route.data['roles'] && route.data['roles'].indexOf(user.role)=== -1){
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
  }


  
}
