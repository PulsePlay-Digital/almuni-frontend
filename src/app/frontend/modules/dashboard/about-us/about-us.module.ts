import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsRoutingModule } from "./about-us-routing.module";
import { AboutUsComponent } from "./about-us.component";
import { SharedModule } from "./../../../shared/shared.module";
import { FounderComponent } from "./founder/founder.component";
import { BalajiSocialSocietyComponent } from "./balaji-social-society/balaji-social-society.component";

@NgModule({
  declarations: [
    AboutUsComponent,
    FounderComponent,
    BalajiSocialSocietyComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ],
})
export class AboutUsModule {}
