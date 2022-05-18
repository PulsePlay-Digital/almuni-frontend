import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FounderComponent } from "./founder/founder.component";
import { BalajiSocialSocietyComponent } from "./balaji-social-society/balaji-social-society.component";

const routes: Routes = [
  {
    path: "about-us/:pageOneID",
    component: FounderComponent,
    data: {
      title: "about-us",
      breadcrumb: [
        {
          label: "About Us",
          url: "/about-us/:pageOneID",
        },
      ],
    },
  },
  {
    path: "about-us/:pageOneID/founder/:pageTwoID",
    component: FounderComponent,
    data: {
      title: "Founder",
      breadcrumb: [
        {
          label: "About Us",
          url: "/about-us/:pageOneID",
        },
        {
          label: "Our Founder Chancellor",
          url: "",
        },
      ],
    },
  },
  {
    path: "about-us/:pageOneID/founder/:pageTwoID/balaji-social-society/:pageThreeID",
    component: BalajiSocialSocietyComponent,
    data: {
      title: "balaji-social-society",
      breadcrumb: [
        {
          label: "About Us",
          url: "/about-us/:pageOneID/",
        },
        {
          label: "Founder",
          url: "/about-us/:pageOneID/founder/:pageTwoID/",
        },
        {
          label: "Balaji Social Society",
          url: "",
        },
      ],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsRoutingModule {}
