import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AsideNavbarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideNavbarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
