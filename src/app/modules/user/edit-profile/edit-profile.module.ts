import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { RouterModule } from '@angular/router';
import { EmploymentBusinessInfoComponent } from './employment-business-info/employment-business-info.component';
import { MentroshipComponent } from './mentroship/mentroship.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { OthersComponent } from './others/others.component';
import { EducationComponent } from './education/education.component';


@NgModule({
  declarations: [
    EditProfileComponent,
    BasicInfoComponent,
    EmploymentBusinessInfoComponent,
    MentroshipComponent,
    ExperienceComponent,
    OthersComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ]
})
export class EditProfileModule { }
