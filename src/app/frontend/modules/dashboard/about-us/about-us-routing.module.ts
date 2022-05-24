import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FounderComponent } from "./founder/founder.component";
import { BalajiSocialSocietyComponent } from "./balaji-social-society/balaji-social-society.component";
import { AboutUsComponent } from "./about-us.component";

const routes: Routes = [
  {
    path: 'about-us', component: AboutUsComponent,
    children: [
      { path: 'founder-chancellor', component: FounderComponent  },
      { path: 'balaji-social-society', component: BalajiSocialSocietyComponent  },
      {
        path: '',
        redirectTo: 'founder-chancellor',
        pathMatch: 'full'
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
