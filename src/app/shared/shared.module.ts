import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {RouterModule} from '@angular/router';

import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [
    AsideNavbarComponent,
    NavbarComponent,
    LinkCardComponent,
    InfoCardComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    RouterModule
  ],
  exports: [
    AsideNavbarComponent,
    NavbarComponent,
    LinkCardComponent,
    InfoCardComponent,
    IvyCarouselModule,
    ContactFormComponent
  ]
})
export class SharedModule { }
