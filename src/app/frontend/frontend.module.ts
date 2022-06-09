import { NgModule } from '@angular/core';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './../frontend/modules/user/user.module';
import { TokenInterceptor } from './../frontend/core/token.interceptor';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { NotificationService } from './services/notification.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataService } from './services/data.service';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';


const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: "localhost"
  },
  position: "bottom",
  theme: "classic",
  palette: {
    popup: {
      background: "#000",
      text: "#fff"
    },
    button: {
      background: "#f1d600",
      text: "#000000"
    }
  },
  type: "info",
  content: {
    message: "This website uses cookies to ensure you get the best experience on our website.",
    dismiss: "Got it!",
    deny: "Refuse cookies",
    link: "Learn more",
    href: "https://cookiesandyou.com",
    policy: "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    FrontendComponent
  ],
  imports: [
    FrontendRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UserModule,
    MatSnackBarModule,
    MatFormFieldModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [ 
    AuthService,
    NotificationService,
    TokenInterceptor,
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    UserService
  ]
})
export class FrontendModule { }
