import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-app-alo',
  templateUrl: './app-alo.component.html',
  styleUrls: ['./app-alo.component.css']
})
export class AppAloComponent implements OnInit {
  title = 'Home';
  subscription;

  constructor(
    private auth: AuthService,
  ) { 

  }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}
