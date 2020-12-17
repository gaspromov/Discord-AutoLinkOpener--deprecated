import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-alo',
  templateUrl: './popup-alo.component.html',
  styleUrls: ['./popup-alo.component.css']
})
export class PopupAloComponent implements OnChanges {
  @Input() title: string = '';
  @Input() canBeAll: boolean = false;
  @Input() placeholder: string = '';
  @Input() btnText: string = 'Save';

  @Output() onSave = new EventEmitter<any>();
  @Output() onClosePopup = new EventEmitter();

  inputValue: string = '';

  constructor() { }

  ngOnChanges(): void {
  }

  onSubmit(){
    this.onSave.emit(this.strToArr(this.inputValue));
  }

  strToArr(str: string){
    let arr: any = [];
    str = str.replace(' ', '').replace('+', '').replace('-', '');
    arr = str.split(',').filter( ell => ell != '');
    arr = [...new Set(arr)];
    return arr;
  }


}
