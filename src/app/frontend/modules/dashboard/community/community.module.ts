import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { SharedModule } from './../../../shared/shared.module';
import { CommunityComponent } from './community.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfessionalClubComponent } from './professional-club/professional-club.component';


@NgModule({
  declarations: [
    CommunityComponent,
    AlumniDirectoryComponent,
    ProfessionalClubComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CommunityModule { }
