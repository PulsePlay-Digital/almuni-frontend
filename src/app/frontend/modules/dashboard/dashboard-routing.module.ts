import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../../../frontend/modules/dashboard/home/home.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { SitemapComponent } from './sitemap/sitemap.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'sitemap',
    component: SitemapComponent
  },
  {
    path: '',
    loadChildren:() => import('./about-us/about-us.module').then(m=>m.AboutUsModule)
  },
  {
    path: '',
    loadChildren:() => import('./celebrate/celebrate.module').then(m=>m.CelebrateModule)
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
  },
  { 
    path: '', 
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  { 
    path: '', 
    loadChildren: () => import('./common-purpose-culture/common-purpose-culture.module').then(m => m.CommonPurposeCultureModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
