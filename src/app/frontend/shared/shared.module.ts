import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { NumbersOnlyDirective } from "./../shared/directives/numbers-only.directive";
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SearchFilterComponent } from "./components/search-filter/search-filter.component";
import { StripHtmlPipe } from './pipes/strip-html.pipe';
import { DialogEntrepreneurshipComponent } from './components/dialog-entrepreneurship/dialog-entrepreneurship.component';
import { MatDialogModule } from "@angular/material/dialog";
import { StartupCornerComponent } from './components/startup-corner/startup-corner.component';
import { AskforGeneralComponent } from './components/askfor-general/askfor-general.component';
import { UsersBannerComponent } from './components/users-banner/users-banner.component';
import { ViewMapComponent } from './components/view-map/view-map.component';
import { AgmCoreModule } from "@agm/core";
import { DashboardBannerComponent } from './components/dashboard-banner/dashboard-banner.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    NumbersOnlyDirective,
    ResetPasswordComponent,
    SearchFilterComponent,
    StripHtmlPipe,
    DialogEntrepreneurshipComponent,
    StartupCornerComponent,
    AskforGeneralComponent,
    UsersBannerComponent,
    ViewMapComponent,
    DashboardBannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDOOCCaDPxmU5SLeaq1X7R_LMFGnay-XOg'
    })
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    NumbersOnlyDirective,
    ResetPasswordComponent,
    SearchFilterComponent,
    StripHtmlPipe,
    DialogEntrepreneurshipComponent,
    UsersBannerComponent,
    ViewMapComponent,
    DashboardBannerComponent
  ]
})
export class SharedModule {}
