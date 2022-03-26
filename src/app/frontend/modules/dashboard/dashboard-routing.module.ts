import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../../../frontend/modules/dashboard/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { CelebrateComponent } from './celebrate/celebrate.component';
import { CollaborateContributeComponent } from './collaborate-contribute/collaborate-contribute.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'celebrate',
    component: CelebrateComponent
  },
  {
    path: 'collaborate-contribute',
    component: CollaborateContributeComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
