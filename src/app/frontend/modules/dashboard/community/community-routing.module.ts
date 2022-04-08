import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    children: [
      { 
        path: 'alumni-directory', 
        component: AlumniDirectoryComponent
      },
      { 
        path: 'professional-club', 
        component: ProfessionalClubComponent
      },
      { 
        path: 'industry-club', 
        component: IndustryClubComponent
      },
      { 
        path: 'entrepreneurship-club', 
        component: EntrepreneurshipClubComponent
      },
      { 
        path: 'start-club', 
        component: StartNewClubComponent
      },
      { 
        path: 'venture-info', 
        component: BusinessVentureInfoComponent
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
