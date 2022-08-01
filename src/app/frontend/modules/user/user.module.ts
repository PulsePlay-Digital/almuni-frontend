import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SharedModule } from '../../shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileModule } from './edit-profile/edit-profile.module';
import { ViewProfileModule } from './view-profile/view-profile.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    EditProfileModule,
    ViewProfileModule,
    MatExpansionModule,
    BsDatepickerModule.forRoot()
  ]
})
export class UserModule { }
