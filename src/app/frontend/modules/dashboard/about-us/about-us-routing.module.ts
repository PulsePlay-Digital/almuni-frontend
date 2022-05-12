import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BalajiGroupComponent } from "./balaji-group/balaji-group.component";
import { WelcomeSocietyComponent } from "./welcome-society/welcome-society.component";
import { AboutUsComponent } from "./about-us.component";
import { FounderComponent } from "./founder/founder.component";
import { PresidentMessageComponent } from "./president-message/president-message.component";
import { ManagementTeamComponent } from "./management-team/management-team.component";
import { StalwartsBlessingsComponent } from "./stalwarts-blessings/stalwarts-blessings.component";
import { BalajiSocialSocietyComponent } from "./balaji-social-society/balaji-social-society.component";
import { EquivalenceToMbaComponent } from "./equivalence-to-mba/equivalence-to-mba.component";
import { AicteApprovalsComponent } from "./aicte-approvals/aicte-approvals.component";

const routes: Routes = [
  {
    path: 'about-us/:pageOneID',
    component: AboutUsComponent,
    data: {
      title: 'about-us',
      breadcrumb: [
        {
          label: 'About Us',
          url: ''
        }
      ]
    },
  },
  // children: [
  {
    path: 'about-us/:pageOneID/founder/:pageTwoID',
    component: FounderComponent,
    data: {
      title: 'Founder',
      breadcrumb: [
        {
          label: 'About Us',
          url: '/about-us/:pageOneID'
        },
        {
          label: 'Our Founder Chancellor',
          url: ''
        }
      ]
    },
  },
  {
    path: 'about-us/:pageOneID/founder/:pageTwoID/balaji-social-society/:pageThreeID',
    component: FounderComponent,
    data: {
      title: 'balaji-social-society',
      breadcrumb: [
        {
          label: 'About Us',
          url: '/about-us/:pageOneID/'
        },
        {
          label: 'Founder',
          url: '/about-us/:pageOneID/founder/:pageTwoID/'
        },
        {
          label: 'Balaji Social Society',
          url: ''
        }
      ]
    },
  }
  // ]

  // path: "about-us",
  // component: AboutUsComponent,
  // children: [
  //   { path: "welcome-society", component: WelcomeSocietyComponent },
  //   { path: "balaji-group", component: BalajiGroupComponent },
  //   { path: "founder", component: FounderComponent },
  //   { path: "president-message", component: PresidentMessageComponent },
  //   { path: "team", component: ManagementTeamComponent },
  //   { path: "blessings", component: StalwartsBlessingsComponent },
  //   { path: 'balaji-social-society', component: BalajiSocialSocietyComponent },
  //   { path: 'aicte-approvals', component: AicteApprovalsComponent },
  //   { path: 'equivalence-to-mba', component: EquivalenceToMbaComponent },
  //   {
  //     path: "",
  //     redirectTo: "welcome-society",
  //     pathMatch: "full",
  //   },
  // ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule { }
