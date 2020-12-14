import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate() {
    
    if ( localStorage.getItem('accessToken') ){
      this.router.navigate( ['/alo'] );
    }
    return true;

  }
}
