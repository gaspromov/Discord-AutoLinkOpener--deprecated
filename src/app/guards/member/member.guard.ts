import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate() {
    if ( localStorage.getItem('isMember') !== 'true' && localStorage.getItem('accessToken') ){
      this.router.navigate( ['/inaccessible'] );
    }
    return true;
  }
  
}
