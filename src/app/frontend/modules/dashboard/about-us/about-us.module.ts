import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { BalajiGroupComponent } from './balaji-group/balaji-group.component';
import { WelcomeSocietyComponent } from './welcome-society/welcome-society.component';
import { SharedModule } from './../../../shared/shared.module';
import { FounderComponent } from './founder/founder.component';
import { PresidentMessageComponent } from './president-message/president-message.component';
import { ManagementTeamComponent } from './management-team/management-team.component';
import { StalwartsBlessingsComponent } from './stalwarts-blessings/stalwarts-blessings.component';
import { BalajiSocialSocietyComponent } from './balaji-social-society/balaji-social-society.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    BalajiGroupComponent,
    WelcomeSocietyComponent,
    FounderComponent,
    PresidentMessageComponent,
    ManagementTeamComponent,
    StalwartsBlessingsComponent,
    BalajiSocialSocietyComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
