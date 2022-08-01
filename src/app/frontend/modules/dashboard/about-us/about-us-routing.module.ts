import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FounderComponent } from "./founder/founder.component";
import { BalajiSocialSocietyComponent } from "./balaji-social-society/balaji-social-society.component";
import { AboutUsComponent } from "./about-us.component";
import { ManagementTeamComponent } from "./management-team/management-team.component";

const routes: Routes = [
  {
    path: 'about-us', component: AboutUsComponent,
    data: { breadcrumb: {alias: 'About'} },
    children: [
      { path: 'founder-chancellor', component: FounderComponent,
      data: { breadcrumb: {alias: 'Founder Chancellor'} },  },
      
      { path: 'balaji-social-society', component: BalajiSocialSocietyComponent,
      data: { breadcrumb: {alias: 'SBUP'} },  },
      { path: 'leadership-team', component: ManagementTeamComponent,
      data: { breadcrumb: {alias: 'Management Team'} },  },
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
