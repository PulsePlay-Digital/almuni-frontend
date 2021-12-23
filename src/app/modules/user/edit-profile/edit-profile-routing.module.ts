import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { EditProfileComponent } from './edit-profile.component';
import { EmploymentBusinessInfoComponent } from './employment-business-info/employment-business-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { MentroshipComponent } from './mentroship/mentroship.component';

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
        component: MentroshipComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfileRoutingModule { }
