import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { CareersComponent } from './careers/careers.component';
import { CollaborateContributeComponent } from './collaborate-contribute.component';
import { SpeacialProjectsComponent } from './speacial-projects/speacial-projects.component';
import { AddNewJobComponent } from './add-new-job/add-new-job.component';
import { AvailableJobsComponent } from './available-jobs/available-jobs.component';
import { AddSpecialProjectComponent } from './add-special-project/add-special-project.component';
import { PostedJobsByMeComponent } from './posted-jobs-by-me/posted-jobs-by-me.component';
import { ProjectPostedByAlumniComponent } from './project-posted-by-alumni/project-posted-by-alumni.component';
import { EngageSocietyComponent } from './engage-society/engage-society.component';
import { AddExpertiseComponent } from './add-expertise/add-expertise.component';
import { AddOpportunityComponent } from './add-opportunity/add-opportunity.component';
import { AvailableEventComponent } from './available-event/available-event.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {
    path: 'collaborate-contribute',
    component: CollaborateContributeComponent,
    children: [
      { path: 'mentorship', component: MentorshipComponent  },
      { path: 'careers', component: CareersComponent  },
      { path: 'special-projects', component: SpeacialProjectsComponent  },
      { path: 'add-job', component: AddNewJobComponent  },
      { path: 'available-jobs', component: AvailableJobsComponent  },
      { path: 'add-special-project', component: AddSpecialProjectComponent  },
      { path: 'posted-jobs-by-me', component: PostedJobsByMeComponent  },
      { path: 'project-by-alumni', component: ProjectPostedByAlumniComponent  },
      { path: 'engage-with-society', component: EngageSocietyComponent  },
      { path: 'add-expertise', component: AddExpertiseComponent  },
      { path: 'add-opportunity', component: AddOpportunityComponent  },
      { path: 'available-event', component: AvailableEventComponent  },
      { path: 'view-details', component: ViewDetailsComponent  },
      {
        path: '',
        redirectTo: 'mentorship',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborateContributeRoutingModule { }
