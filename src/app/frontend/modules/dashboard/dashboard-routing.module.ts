import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../../../frontend/modules/dashboard/home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { CelebrateComponent } from './celebrate/celebrate.component';
import { CollaborateContributeComponent } from './collaborate-contribute/collaborate-contribute.component';
import { CommonPurposeCultureComponent } from './common-purpose-culture/common-purpose-culture.component';
// import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { SitemapComponent } from './sitemap/sitemap.component';

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
    path: 'celebrate',
    component: CelebrateComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'common-purpose-culture',
    component: CommonPurposeCultureComponent
  },
  {
    path: 'sitemap',
    component: SitemapComponent
  },
  {
    path: '',
    loadChildren:() => import('./collaborate-contribute/collaborate-contribute.module').then(m=>m.CollaborateContributeModule)
  },
  { 
    path: '', 
    loadChildren: () => import('./community/community.module').then(m => m.CommunityModule)
  },
  { 
    path: '', 
    loadChildren: () => import('./connect/connect.module').then(m => m.ConnectModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
