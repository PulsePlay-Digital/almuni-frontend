import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EditProfileComponent } from './edit-profile.component';
import { EducationComponent } from './education/education.component';
import { EmploymentBusinessInfoComponent } from './employment-business-info/employment-business-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/edit-profile/basic-info',
    pathMatch: 'full'
  },
  {
    path: '',
    component: EditProfileComponent,
    children: [
      {
        path: 'basic-info',
        component: BasicInfoComponent
      },
      {
        path: 'employment-info',
        component: EmploymentBusinessInfoComponent
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
export class EditProfileRoutingModule { }
