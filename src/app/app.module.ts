import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InaccessibleComponent } from './components/inaccessible/inaccessible.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppAloComponent } from './components/app-alo/app-alo.component';
import { DsJoinerComponent } from './components/alo-components/ds-joiner/ds-joiner.component';
import { NitroClaimerComponent } from './components/alo-components/nitro-claimer/nitro-claimer.component';
import { SupremeAloComponent } from './components/alo-components/supreme-alo/supreme-alo.component';
import { HomeAloComponent } from './components/alo-components/home-alo/home-alo.component';
import { SettingsAloComponent } from './components/alo-components/settings-alo/settings-alo.component';
import { DsOpenerComponent } from './components/alo-components/ds-opener/ds-opener.component';
import { SidebarAloComponent } from './components/alo-components/sidebar-alo/sidebar-alo.component';
import { PopupAloComponent } from './components/alo-components/popup-alo/popup-alo.component';
import { SupremeLogsComponent } from './components/alo-components/supreme-logs/supreme-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InaccessibleComponent,
    MainPageComponent,
    AppAloComponent,
    DsJoinerComponent,
    NitroClaimerComponent,
    SupremeAloComponent,
    HomeAloComponent,
    SettingsAloComponent,
    DsOpenerComponent,
    SidebarAloComponent,
    PopupAloComponent,
    SupremeLogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(/*options*/)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
