import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-supreme-alo',
  templateUrl: './supreme-alo.component.html',
  styleUrls: ['./supreme-alo.component.css']
})
export class SupremeAloComponent implements OnInit {
  supremeForm: FormGroup;
  isPositivePopup: boolean = true;

  isActivePopup: boolean = false;
  canBeAllPopup: boolean = false;
  placeholderPopup: string = "";
  titlePopup: string = '';


  constructor() { }

  ngOnInit(): void {
    this.generateForm();
  }


  generateForm(){
    let monitorData = this.getMonitorData();
    let ps_kw = [];
    let ng_kw = [];
    
    if (monitorData){
      ps_kw = monitorData.ps_kw;
      ng_kw = monitorData.ng_kw;
    }
    console.log('kk')
    this.supremeForm = new FormGroup({
      ps_kw: new FormControl( { value: ps_kw, disabled: false } ),
      ng_kw: new FormControl( { value: ng_kw, disabled: false } ),
      category: new FormControl( { value: monitorData ? monitorData.category : 'new', disabled: false } ),
      color: new FormControl( { value: monitorData ? monitorData.color : '', disabled: false } ),
      size: new FormControl( { value: monitorData ? monitorData.size : 'm', disabled: false } ),
      delay: new FormControl( { value: monitorData ? monitorData.delay : '', disabled: false } )
    })
  }


  getMonitorData(){
    return JSON.parse( localStorage.getItem('sup_monitor') );
  }
  
  onOpenPopup(title, placeholder, canBeAll, isPositivePopup){
    this.titlePopup = title;
    this.placeholderPopup = placeholder;
    this.canBeAllPopup = canBeAll;

    this.isActivePopup = true;
    this.isPositivePopup = isPositivePopup;
  }

  onClosePopup(){
    this.isActivePopup = false;
  }

  onSave(arr: any = []){
    let ps_kw = this.supremeForm.value.ps_kw;
    let ng_kw = this.supremeForm.value.ng_kw
    this.isPositivePopup ? this.supremeForm.value.ps_kw = ps_kw.concat(arr) : this.supremeForm.value.ng_kw = ng_kw.concat(arr);
    this.saveData();
    this.generateForm();
    this.onClosePopup();
  }

  saveData(){
    localStorage.setItem( 'sup_monitor', JSON.stringify(this.supremeForm.value) );
  }

  onStart(){
    this.saveData();
  }

  deleteKW( kw: string, isPositive: boolean ){
    if (isPositive)
      this.supremeForm.value.ps_kw = this.supremeForm.value.ps_kw.filter(ell => ell !== kw);
    else
      this.supremeForm.value.ng_kw = this.supremeForm.value.ng_kw.filter(ell => ell !== kw);
    this.saveData();
    this.generateForm();
  }

}
