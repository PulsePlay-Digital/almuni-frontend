import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    MatExpansionModule
  ]
})
export class UserModule { }
