import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-opener',
  templateUrl: './ds-opener.component.html',
  styleUrls: ['./ds-opener.component.css']
})
export class DsOpenerComponent implements OnInit {
  isActivePopup: boolean = false;

  canBeAllPopup: boolean = false;
  placeholderPopup: string = "";
  titlePopup: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  console(){
    console.log('fff')
  }

  onOpenPopup(title, placeholder, canBeAll){
    this.titlePopup = title;
    this.placeholderPopup = placeholder;
    this.canBeAllPopup = canBeAll;

    this.isActivePopup = true;
  }

  onClosePopup(){
    this.isActivePopup = false;
  }

}
