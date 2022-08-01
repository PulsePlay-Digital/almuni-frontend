import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import { EmpBusinessInfoComponent } from './emp-business-info/emp-business-info.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { ExperienceComponent } from './experience/experience.component';
import { OthersComponent } from './others/others.component';
import { SharedModule } from 'src/app/frontend/shared/shared.module';


@NgModule({
  declarations: [
    EditProfileComponent,
    BasicInfoComponent,
    EducationComponent,
    EmpBusinessInfoComponent,
    MentorshipComponent,
    ExperienceComponent,
    OthersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    EditProfileRoutingModule,
    BsDatepickerModule.forRoot()
  ]
})
export class EditProfileModule { }
