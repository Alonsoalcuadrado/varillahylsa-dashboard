import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkCardComponent } from './link-card/link-card.component';



@NgModule({
  declarations: [
    AsideNavbarComponent,
    NavbarComponent,
    LinkCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideNavbarComponent,
    NavbarComponent,
    LinkCardComponent
  ]
})
export class SharedModule { }
