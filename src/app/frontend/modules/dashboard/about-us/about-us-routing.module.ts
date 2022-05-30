import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FounderComponent } from "./founder/founder.component";
import { BalajiSocialSocietyComponent } from "./balaji-social-society/balaji-social-society.component";
import { AboutUsComponent } from "./about-us.component";

const routes: Routes = [
  {
    path: 'about-us', component: AboutUsComponent,
    data: { breadcrumb: {alias: 'About'} },
    children: [
      { path: 'founder-chancellor', component: FounderComponent,
      data: { breadcrumb: {alias: 'Founder Chancellor'} },  },
      
      { path: 'balaji-social-society', component: BalajiSocialSocietyComponent,
      data: { breadcrumb: {alias: 'Balaji Social Society'} },  },
      {
        path: '',
        redirectTo: 'founder-chancellor',
        pathMatch: 'full'
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
