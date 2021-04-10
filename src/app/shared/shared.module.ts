import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { InfoCardComponent } from './info-card/info-card.component';



@NgModule({
  declarations: [
    AsideNavbarComponent,
    NavbarComponent,
    LinkCardComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideNavbarComponent,
    NavbarComponent,
    LinkCardComponent,
    InfoCardComponent
  ]
})
export class SharedModule { }
