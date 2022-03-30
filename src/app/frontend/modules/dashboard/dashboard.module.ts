import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedModule } from './../../../frontend/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { CelebrateComponent } from './celebrate/celebrate.component';
import { CollaborateContributeComponent } from './collaborate-contribute/collaborate-contribute.component';
import { EventComponent } from './event/event.component';
import { CommunityComponent } from './community/community.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { CommonPurposeCultureComponent } from './common-purpose-culture/common-purpose-culture.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ConnectComponent } from './connect/connect.component';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    NewsComponent,
    CelebrateComponent,
    CollaborateContributeComponent,
    EventComponent,
    CommunityComponent,
    SitemapComponent,
    AboutUsComponent,
    CareersComponent,
    CommonPurposeCultureComponent,
    ConnectComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    SharedModule,
    CarouselModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class DashboardModule { }
