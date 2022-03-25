import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EducationComponent } from './education/education.component';
import { EmploymentBusinessInfoComponent } from './employment-business-info/employment-business-info.component';
import { ExperienceComponent } from './experience/experience.component';
import { OthersComponent } from './others/others.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { SharedModule } from 'src/app/frontend/shared/shared.module';


@NgModule({
  declarations: [
    EditProfileComponent,
    BasicInfoComponent,
    EducationComponent,
    EmploymentBusinessInfoComponent,
    ExperienceComponent,
    OthersComponent,
    MentorshipComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BsDatepickerModule.forRoot()
  ]
})
export class EditProfileModule { }
