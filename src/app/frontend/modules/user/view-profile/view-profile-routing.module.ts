import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EducationComponent } from './education/education.component';
import { EmpBusinessInfoComponent } from './emp-business-info/emp-business-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { OthersComponent } from './others/others.component';
import { ViewProfileComponent } from './view-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/view-profile/basic-info',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ViewProfileComponent,
    children: [
      {
        path: 'basic-info',
        component: BasicInfoComponent
      },
      {
        path: 'employment-info',
        component: EmpBusinessInfoComponent
      },
      {
        path: 'mentorship',
        component: MentorshipComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'others',
        component: OthersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewProfileRoutingModule { }
