import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ds-joiner',
  templateUrl: './ds-joiner.component.html',
  styleUrls: ['./ds-joiner.component.css']
})
export class DsJoinerComponent implements OnInit {
  isActivePopup: boolean = false;

  canBeAllPopup: boolean = false;
  placeholderPopup: string = "";
  titlePopup: string = '';

  constructor() { }

  ngOnInit(): void {
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
