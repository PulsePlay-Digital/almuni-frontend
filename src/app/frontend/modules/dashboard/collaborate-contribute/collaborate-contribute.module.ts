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
import { PostedJobsByMeComponent } from './posted-jobs-by-me/posted-jobs-by-me.component';
import { ProjectPostedByAlumniComponent } from './project-posted-by-alumni/project-posted-by-alumni.component';
import { EngageSocietyComponent } from './engage-society/engage-society.component';
import { AddExpertiseComponent } from './add-expertise/add-expertise.component';
import { AddOpportunityComponent } from './add-opportunity/add-opportunity.component';
import { MyPostedOpportunityComponent } from './my-posted-opportunity/my-posted-opportunity.component';
import { MyPostedExpertiseComponent } from './my-posted-expertise/my-posted-expertise.component';
import { AvailableEventComponent } from './available-event/available-event.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CollaboratePageComponent } from './collaborate-page/collaborate-page.component';
import { ProjectPostedByMeComponent } from './project-posted-by-me/project-posted-by-me.component';


@NgModule({
  declarations: [
    MentorshipComponent,
    CareersComponent,
    SpeacialProjectsComponent,
    AddNewJobComponent,
    AvailableJobsComponent,
    AddSpecialProjectComponent,
    PostedJobsByMeComponent,
    ProjectPostedByAlumniComponent,
    EngageSocietyComponent,
    AddExpertiseComponent,
    AddOpportunityComponent,
    MyPostedOpportunityComponent,
    MyPostedExpertiseComponent,
    AvailableEventComponent,
    ViewDetailsComponent,
    CollaboratePageComponent,
    ProjectPostedByMeComponent
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
