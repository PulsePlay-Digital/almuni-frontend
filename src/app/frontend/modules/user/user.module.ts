import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileModule } from './edit-profile/edit-profile.module';
import { SharedModule } from '../../shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    ViewProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    EditProfileModule,
    MatExpansionModule,
    SharedModule,
    BsDatepickerModule.forRoot()
  ]
})
export class UserModule { }
