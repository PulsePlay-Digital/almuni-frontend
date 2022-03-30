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

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoaderComponent, NumbersOnlyDirective, ResetPasswordComponent,SearchFilterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [HeaderComponent, FooterComponent, LoaderComponent, NumbersOnlyDirective, ResetPasswordComponent, SearchFilterComponent]
})
export class SharedModule {}
