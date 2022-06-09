import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FrontendModule } from "./frontend/frontend.module";
import { CKEditorModule } from "ng2-ckeditor";
import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbService } from "xng-breadcrumb";
import { NgcCookieConsentConfig, NgcCookieConsentModule } from "ngx-cookieconsent";
const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost'// it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'classic',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}} 
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> 
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a>
    </span>
    `,
  },
  content: {
    message: 'We use cookies to give you a better experience. By using our website you agree to',

    // cookiePolicyLink: 'Cookie Policy',
    // cookiePolicyHref: 'https://cookie.com',

    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://www.sbup.edu.in/About/privacy_policy',

    // tosLink: 'Terms of Service',
    // tosHref: 'https://tos.com',
  }
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FrontendModule,
    CKEditorModule,
    BreadcrumbModule,
    [NgcCookieConsentModule.forRoot(cookieConfig)],
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent],
})
export class AppModule { }
