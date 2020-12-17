import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nitro-claimer',
  templateUrl: './nitro-claimer.component.html',
  styleUrls: ['./nitro-claimer.component.css']
})
export class NitroClaimerComponent implements OnInit {
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
