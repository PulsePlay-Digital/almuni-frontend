import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniAchievementComponent } from './alumni-achievement/alumni-achievement.component';
import { AlumniJourneyComponent } from './alumni-journey/alumni-journey.component';
import { AlumniPassionComponent } from './alumni-passion/alumni-passion.component';
import { CelebrateComponent } from './celebrate.component';
import { FeaturedAlumniDetailsComponent } from './featured-alumni-details/featured-alumni-details.component';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MagazineComponent } from './magazine/magazine.component';

const routes: Routes = [
  { path: 'celebrate', component: CelebrateComponent,
  children: [
    { path: 'featured-alumni', component: FeaturedAlumniComponent },
    { path: 'alumni-details', component: FeaturedAlumniDetailsComponent },
    { path: 'alumni-journey', component: AlumniJourneyComponent },
    { path: 'alumni-achievement', component: AlumniAchievementComponent },
    { path: 'alumni-passion', component: AlumniPassionComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'magazine', component: MagazineComponent },
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
