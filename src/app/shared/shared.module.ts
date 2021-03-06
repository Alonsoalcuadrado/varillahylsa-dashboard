import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LinkCardComponent } from './link-card/link-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    AsideNavbarComponent,
    NavbarComponent,
    LinkCardComponent,
    InfoCardComponent,
    ContactFormComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    AsideNavbarComponent,
    NavbarComponent,
    LinkCardComponent,
    InfoCardComponent,
    IvyCarouselModule,
    ContactFormComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
