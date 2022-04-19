import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalajiGroupComponent } from './balaji-group/balaji-group.component';
import { WelcomeSocietyComponent } from './welcome-society/welcome-society.component';
import { AboutUsComponent } from './about-us.component';
import { FounderComponent } from './founder/founder.component';
import { PresidentMessageComponent } from './president-message/president-message.component';
import { ManagementTeamComponent } from './management-team/management-team.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent,
  children: [
    { path: 'welcome-society', component: WelcomeSocietyComponent},
    { path: 'balaji-group', component: BalajiGroupComponent},
    { path: 'founder', component: FounderComponent},
    { path: 'president-message', component: PresidentMessageComponent},
    { path: 'team', component: ManagementTeamComponent},
    {
      path: '',
      redirectTo: 'welcome-society',
      pathMatch: 'full'
    },
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
