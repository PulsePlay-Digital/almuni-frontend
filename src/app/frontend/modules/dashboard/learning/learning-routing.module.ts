import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinuousLearningComponent } from './continuous-learning/continuous-learning.component';
import { LearningComponent } from './learning.component';

const routes: Routes = [
  { path: 'learning', component: LearningComponent,
    children: [
      { path: 'continuous-learning', component: ContinuousLearningComponent },
      {
        path: '',
        redirectTo: 'continuous-learning',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
