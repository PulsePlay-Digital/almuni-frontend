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
    MatFormFieldModule
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
