import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsRoutingModule } from "./about-us-routing.module";
import { AboutUsComponent } from "./about-us.component";
import { SharedModule } from "./../../../shared/shared.module";
import { FounderComponent } from "./founder/founder.component";
import { BalajiSocialSocietyComponent } from "./balaji-social-society/balaji-social-society.component";
import { BreadcrumbModule } from "xng-breadcrumb";
import { MatIconModule } from "@angular/material/icon";
import { ManagementTeamComponent } from "./management-team/management-team.component";
import { NgxPaginationModule } from "ngx-pagination";
import { LazyLoadImageModule } from "ng-lazyload-image";
@NgModule({
  declarations: [
    AboutUsComponent,
    FounderComponent,
    BalajiSocialSocietyComponent,
    ManagementTeamComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,
    BreadcrumbModule,
    MatIconModule,
    NgxPaginationModule,
    LazyLoadImageModule
  ],
})
export class AboutUsModule {}
