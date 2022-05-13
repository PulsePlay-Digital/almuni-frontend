import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from './../../../frontend/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { CelebrateComponent } from './celebrate/celebrate.component';
import { CollaborateContributeComponent } from './collaborate-contribute/collaborate-contribute.component';
import { EventComponent } from './event/event.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { CareersComponent } from './careers/careers.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ConnectModule } from './connect/connect.module';


@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    CelebrateComponent,
    CollaborateContributeComponent,
    EventComponent,
    SitemapComponent,
    CareersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    SharedModule,
    ConnectModule,
    CarouselModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class DashboardModule { }
