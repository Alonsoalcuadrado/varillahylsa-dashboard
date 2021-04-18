import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ContactModule { }
