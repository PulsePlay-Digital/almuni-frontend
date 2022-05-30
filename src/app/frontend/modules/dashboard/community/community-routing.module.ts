import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniDetailsComponent } from './alumni-details/alumni-details.component';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { BusinessVentureInfoComponent } from './business-venture-info/business-venture-info.component';
import { CommunityComponent } from './community.component';
import { EntrepreneurshipClubComponent } from './entrepreneurship-club/entrepreneurship-club.component';
import { IndustryClubComponent } from './industry-club/industry-club.component';
import { ProfessionalClubComponent } from './professional-club/professional-club.component';
import { StartNewClubComponent } from './start-new-club/start-new-club.component';

const routes: Routes = [
  { 
    path: 'community', 
    component: CommunityComponent,
    data: {breadcrumb: {alias: 'Community'} },
    children: [
      { 
        path: 'alumni-directory', 
        component: AlumniDirectoryComponent,
        data: {breadcrumb: {alias: 'Alumni Directory'} },
      },
      { 
        path: 'professional-club', 
        component: ProfessionalClubComponent,
        data: {breadcrumb: {alias: 'Professional Club'} },
      },
      { 
        path: 'industry-club', 
        component: IndustryClubComponent,
        data: {breadcrumb: {alias: 'Industry Club'} },
      },
      { 
        path: 'entrepreneurship-club', 
        component: EntrepreneurshipClubComponent,
        data: {breadcrumb: {alias: 'Entrepreneurship Club'} },
      },
      { 
        path: 'start-club', 
        component: StartNewClubComponent,
        data: {breadcrumb: {alias: 'start-club'} },
      },
      { 
        path: 'venture-info', 
        component: BusinessVentureInfoComponent,
        data: {breadcrumb: {alias: 'venture-info'} },
      },
      { 
        path: 'alumni-details', 
        component: AlumniDetailsComponent
      },
      {
        path: '',
        redirectTo: 'alumni-directory',
        pathMatch: 'full'
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
