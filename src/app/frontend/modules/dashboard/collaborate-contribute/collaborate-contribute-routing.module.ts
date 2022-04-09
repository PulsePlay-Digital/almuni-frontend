import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { CareersComponent } from './careers/careers.component';
import { CollaborateContributeComponent } from './collaborate-contribute.component';
import { SpeacialProjectsComponent } from './speacial-projects/speacial-projects.component';
import { AddNewJobComponent } from './add-new-job/add-new-job.component';
import { AvailableJobsComponent } from './available-jobs/available-jobs.component';
import { AddSpecialProjectComponent } from './add-special-project/add-special-project.component';

const routes: Routes = [
  {
    path: 'collaborate-contribute',
    component: CollaborateContributeComponent,
    children: [
      { path:'mentorship', component: MentorshipComponent  },
      { path:'careers', component: CareersComponent  },
      { path: 'special-projects', component: SpeacialProjectsComponent  },
      { path: 'add-job', component: AddNewJobComponent  },
      { path: 'available-jobs', component: AvailableJobsComponent  },
      { path: 'add-special-project', component: AddSpecialProjectComponent  },
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
