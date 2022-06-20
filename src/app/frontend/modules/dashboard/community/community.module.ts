import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { SharedModule } from './../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProfessionalClubComponent } from './professional-club/professional-club.component';
import { StartNewClubComponent } from './start-new-club/start-new-club.component';
import { CommunityComponent } from './community.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { IndustryClubComponent } from './industry-club/industry-club.component';
import { EntrepreneurshipClubComponent } from './entrepreneurship-club/entrepreneurship-club.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BusinessVentureInfoComponent } from './business-venture-info/business-venture-info.component';
import { AlumniDetailsComponent } from './alumni-details/alumni-details.component';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { CommunityPageComponent } from './community-page/community-page.component';
import { ClubDetailsComponent } from './club-details/club-details.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AlumniDirectoryComponent,
    ProfessionalClubComponent,
    StartNewClubComponent,
    CommunityComponent,
    IndustryClubComponent,
    EntrepreneurshipClubComponent,
    BusinessVentureInfoComponent,
    AlumniDetailsComponent,
    CommunityPageComponent,
    ClubDetailsComponent
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    CKEditorModule,
    MatDialogModule,
    BreadcrumbModule,
    MatIconModule,
    LazyLoadImageModule
  ]
})
export class CommunityModule { }
