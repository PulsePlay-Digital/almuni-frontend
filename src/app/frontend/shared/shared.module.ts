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
import { MatListModule } from "@angular/material/list";
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import { FilterTextPipe } from "./pipes/filter-text.pipe";
import { DialogAlertBoxComponent } from './components/dialog-alert-box/dialog-alert-box.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { CommonBannerComponent } from './components/common-banner/common-banner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    NumbersOnlyDirective,
    ResetPasswordComponent,
    SearchFilterComponent,
    FilterTextPipe,
    StripHtmlPipe,
    DialogEntrepreneurshipComponent,
    StartupCornerComponent,
    AskforGeneralComponent,
    UsersBannerComponent,
    ViewMapComponent,
    DashboardBannerComponent,
    DialogAlertBoxComponent,
    DateAgoPipe,
    CommonBannerComponent
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
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    MatExpansionModule,

    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnWjRnYN8Fm3rOkg0bts63Kt7KLFajbaM'
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
    FilterTextPipe,
    DateAgoPipe,
    DialogEntrepreneurshipComponent,
    UsersBannerComponent,
    ViewMapComponent,
    DashboardBannerComponent,
    DialogAlertBoxComponent,
    CommonBannerComponent
  ]
})
export class SharedModule {}
