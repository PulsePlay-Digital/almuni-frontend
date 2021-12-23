import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { RouterModule } from '@angular/router';
import { EmploymentBusinessInfoComponent } from './employment-business-info/employment-business-info.component';
import { MentroshipComponent } from './mentroship/mentroship.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    EditProfileComponent,
    BasicInfoComponent,
    EmploymentBusinessInfoComponent,
    MentroshipComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    RouterModule
  ]
})
export class EditProfileModule { }
