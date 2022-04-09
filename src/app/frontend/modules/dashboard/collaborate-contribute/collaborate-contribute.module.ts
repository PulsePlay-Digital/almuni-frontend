import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborateContributeRoutingModule } from './collaborate-contribute-routing.module';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { CareersComponent } from './careers/careers.component';
import { SpeacialProjectsComponent } from './speacial-projects/speacial-projects.component';
import { SharedModule } from './../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddNewJobComponent } from './add-new-job/add-new-job.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { AvailableJobsComponent } from './available-jobs/available-jobs.component';
import { AddSpecialProjectComponent } from './add-special-project/add-special-project.component';


@NgModule({
  declarations: [
    MentorshipComponent,
    CareersComponent,
    SpeacialProjectsComponent,
    AddNewJobComponent,
    AvailableJobsComponent,
    AddSpecialProjectComponent,
  ],
  imports: [
    CommonModule,
    CollaborateContributeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    CKEditorModule
  ]
})
export class CollaborateContributeModule { }
