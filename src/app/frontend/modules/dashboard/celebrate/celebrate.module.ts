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
import { ViewJourneyDetailComponent } from './shared-alumni/view-journey-detail/view-journey-detail.component';


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
    ViewJourneyDetailComponent
  ],
  imports: [
    CommonModule,
    CelebrateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CKEditorModule,
    SharedModule,
    MatTabsModule,
    NgxPaginationModule
  ]
})
export class CelebrateModule { }
