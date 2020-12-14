import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { InaccessibleComponent } from './components/inaccessible/inaccessible.component';
import { LoginComponent } from './components/login/login.component';

import { IsMemberGuard } from './guards/is-member/is-member.guard';
import { MemberGuard } from './guards/member/member.guard';
import { IsLoginGuard } from './guards/is-login/is-login.guard';
import { LoginGuard } from './guards/login/login.guard';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeAloComponent } from './components/alo-components/home-alo/home-alo.component';
import { DsJoinerComponent } from './components/alo-components/ds-joiner/ds-joiner.component';
import { NitroClaimerComponent } from './components/alo-components/nitro-claimer/nitro-claimer.component';
import { SettingsAloComponent } from './components/alo-components/settings-alo/settings-alo.component';
import { DsOpenerComponent } from './components/alo-components/ds-opener/ds-opener.component';
import { SupremeAloComponent } from './components/alo-components/supreme-alo/supreme-alo.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent, canActivate: [ IsLoginGuard ] },

  { path: 'inaccessible', component: InaccessibleComponent, canActivate: [ LoginGuard, IsMemberGuard ] },

  { path: 'alo', component: MainPageComponent, canActivate: [ LoginGuard, MemberGuard ], children: [
    { path: 'home', component: HomeAloComponent },
    { path: 'opener', component: DsOpenerComponent },
    { path: 'joiner', component: DsJoinerComponent },
    { path: 'claimer', component: NitroClaimerComponent },
    { path: 'supreme', component: SupremeAloComponent },
    { path: 'settings', component: SettingsAloComponent },
    { path: '**', redirectTo: '/alo/home' } 
  ] },

  { path: '**', redirectTo: '/login' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
