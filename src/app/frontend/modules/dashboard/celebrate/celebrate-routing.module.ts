import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniAchievementComponent } from './alumni-achievement/alumni-achievement.component';
import { AlumniJourneyComponent } from './alumni-journey/alumni-journey.component';
import { AlumniPassionComponent } from './alumni-passion/alumni-passion.component';
import { CelebrateComponent } from './celebrate.component';
import { FeaturedAlumniDetailsComponent } from './featured-alumni-details/featured-alumni-details.component';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { SharedAlumniComponent } from './shared-alumni/shared-alumni.component';
import { SharedByMeComponent } from './shared-by-me/shared-by-me.component';

const routes: Routes = [
  { path: 'celebrate', component: CelebrateComponent,
  children: [
    { path: 'featured-alumni', component: FeaturedAlumniComponent },
    { path: 'featured-alumni-details', component: FeaturedAlumniDetailsComponent },
    { path: 'alumni-journey', component: AlumniJourneyComponent },
    // { path: 'shared-by-me', component: SharedByMeComponent },
    // { path: 'shared-alumni', component: SharedAlumniComponent },
    { path: 'alumni-achievement', component: AlumniAchievementComponent },
    { path: 'alumni-passion', component: AlumniPassionComponent },
    {
      path: '',
      redirectTo: 'featured-alumni',
      pathMatch: 'full'
    },
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebrateRoutingModule { }
