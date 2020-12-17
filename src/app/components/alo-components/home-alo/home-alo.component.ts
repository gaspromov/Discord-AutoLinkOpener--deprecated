import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-alo',
  templateUrl: './home-alo.component.html',
  styleUrls: ['./home-alo.component.css']
})
export class HomeAloComponent implements OnInit {
  licenseKey: string = '';

  constructor(){}

  ngOnInit(): void {
  }

  getInfo(){
    console.log(this.licenseKey);
  }

  resetKey(){

  }


}
