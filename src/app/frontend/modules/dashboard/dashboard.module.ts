import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from './../../../frontend/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CelebrateComponent } from './celebrate/celebrate.component';
import { CollaborateContributeComponent } from './collaborate-contribute/collaborate-contribute.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { CareersComponent } from './careers/careers.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ConnectModule } from './connect/connect.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranscriptComponent } from './transcript/transcript.component';


@NgModule({
  declarations: [
    HomeComponent,
    CelebrateComponent,
    CollaborateContributeComponent,
    SitemapComponent,
    CareersComponent,
    TranscriptComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    ConnectModule,
    CarouselModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class DashboardModule { }
