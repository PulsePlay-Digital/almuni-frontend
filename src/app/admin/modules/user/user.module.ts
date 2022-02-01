import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SharedModule } from './../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    AgGridModule.withComponents([]) 
  ]
})
export class UserModule { }
