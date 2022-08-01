import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelebrateRoutingModule } from './celebrate-routing.module';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { FeaturedAlumniDetailsComponent } from './featured-alumni-details/featured-alumni-details.component';
import { AlumniJourneyComponent } from './alumni-journey/alumni-journey.component';
import { SharedByMeComponent } from './shared-by-me/shared-by-me.component';
import { SharedAlumniComponent } from './shared-alumni/shared-alumni.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { AlumniAchievementComponent } from './alumni-achievement/alumni-achievement.component';
import { AlumniPassionComponent } from './alumni-passion/alumni-passion.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MagazineComponent } from './magazine/magazine.component';
import { SharedModule } from './../../../shared/shared.module';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewJourneyDetailComponent } from './view-journey-detail/view-journey-detail.component';
import { NewsDetailComponent } from './news-updates/news-detail/news-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FilterTextPipe } from 'src/app/frontend/shared/pipes/filter-text.pipe';
import { SharedJourneyByMeComponent } from './shared-journey-by-me/shared-journey-by-me.component';
import { SharedAchievementByMeComponent } from './shared-achievement-by-me/shared-achievement-by-me.component';
import { SharedPassionByMeComponent } from './shared-passion-by-me/shared-passion-by-me.component';
import { GetFeaturedComponent } from './get-featured/get-featured.component';
import { NgxStarRatingModule } from 'ngx-star-rating';


@NgModule({
  declarations: [
    FeaturedAlumniComponent,
    FeaturedAlumniDetailsComponent,
    AlumniJourneyComponent,
    SharedByMeComponent,
    SharedAlumniComponent,
    AlumniAchievementComponent,
    AlumniPassionComponent,
    GalleryComponent,
    MagazineComponent,
    NewsUpdatesComponent,
    ViewJourneyDetailComponent,
    NewsDetailComponent,
    SharedJourneyByMeComponent,
    SharedAchievementByMeComponent,
    SharedPassionByMeComponent,
    GetFeaturedComponent
  ],
  imports: [
    CommonModule,
    CelebrateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    NgxPaginationModule,
    NgxStarRatingModule
  ]
})
export class CelebrateModule { }
