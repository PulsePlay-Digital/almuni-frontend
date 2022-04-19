import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from './../../../shared/shared.module';
import { KeyContactComponent } from './key-contact/key-contact.component';
import { SocialLinksComponent } from './social-links/social-links.component';


@NgModule({
  declarations: [
    ContactComponent,
    KeyContactComponent,
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ]
})
export class ContactModule { }
