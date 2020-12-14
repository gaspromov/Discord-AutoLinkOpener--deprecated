import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  login(token: string, isMember: boolean){
    
    localStorage.setItem( 'accessToken', token );
    localStorage.setItem( 'isMember', isMember.toString() );
    this.router.navigate( [ isMember ? 'alo' : 'inaccessible' ] );

  }

  toLogin(){
    window.location.href = 'api/v1/auth/discord';
  }

  logout(){
    localStorage.removeItem( 'accessToken' );
    localStorage.removeItem( 'isMember' );
    this.router.navigate( ['/login'] ); 
  }

}
