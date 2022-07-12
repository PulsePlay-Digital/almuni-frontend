import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning.component';
import { ContinuousLearningComponent } from './continuous-learning/continuous-learning.component';
import { SharedModule } from 'src/app/frontend/shared/shared.module';


@NgModule({
  declarations: [
    LearningComponent,
    ContinuousLearningComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
