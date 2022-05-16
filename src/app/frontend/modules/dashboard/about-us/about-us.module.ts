import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
import { AboutUsRoutingModule } from "./about-us-routing.module";
import { AboutUsComponent } from "./about-us.component";
import { BalajiGroupComponent } from "./balaji-group/balaji-group.component";
import { WelcomeSocietyComponent } from "./welcome-society/welcome-society.component";
import { SharedModule } from "./../../../shared/shared.module";
import { FounderComponent } from "./founder/founder.component";
import { BalajiSocialSocietyComponent } from "./balaji-social-society/balaji-social-society.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AboutUsComponent,
    BalajiGroupComponent,
    WelcomeSocietyComponent,
    FounderComponent,
    BalajiSocialSocietyComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
    NgxPaginationModule,
    NgDynamicBreadcrumbModule,
  ],
})
export class AboutUsModule {}
