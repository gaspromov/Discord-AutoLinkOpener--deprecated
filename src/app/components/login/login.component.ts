import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  subsciption;

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
  ){
    this.subsciption = this.activatedRoute.queryParams.subscribe( data => {
      if (data['token'])
        this.auth.login( data['token'], data['member'] == 'true' );
    })
   }

  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }

  toLogin(){
    this.auth.toLogin();
  }


}
