import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SharedModule } from './../../shared/shared.module';
import { AgGridModule } from 'ag-grid-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { ViewUserComponent } from './view-user/view-user.component';;


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    AllUsersComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    AgGridModule.withComponents([]),
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatExpansionModule
  ]
})
export class UserModule { }
