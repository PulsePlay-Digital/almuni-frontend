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
import { NewsDetailComponent } from './news-updates/news-detail/news-detail.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { ViewJourneyDetailComponent } from './view-journey-detail/view-journey-detail.component';
import { SharedJourneyByMeComponent } from './shared-journey-by-me/shared-journey-by-me.component';
import { SharedPassionByMeComponent } from './shared-passion-by-me/shared-passion-by-me.component';
import { GetFeaturedComponent } from './get-featured/get-featured.component';

const routes: Routes = [
  { path: 'celebrate', component: CelebrateComponent,
  children: [
    { path: 'featured-alumni', component: FeaturedAlumniComponent },
    { path: 'alumni-details', component: FeaturedAlumniDetailsComponent },
    { path: 'alumni-journey', component: AlumniJourneyComponent },
    { path: 'shared-journey-by-me', component: SharedJourneyByMeComponent },
    { path: 'alumni-achievement', component: AlumniAchievementComponent },
    { path: 'shared-achievement-by-me', component: SharedJourneyByMeComponent },
    { path: 'alumni-passion', component: AlumniPassionComponent },
    { path: 'shared-passion-by-me', component: SharedPassionByMeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'magazine', component: MagazineComponent },
    { path: 'news-update', component: NewsUpdatesComponent },
    { path: 'news-detail', component: NewsDetailComponent },
    { path: 'detail-page', component: ViewJourneyDetailComponent },
    { path: 'get-featured', component: GetFeaturedComponent },
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
