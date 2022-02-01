import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from './../frontend/modules/user/user.module';
import { TokenInterceptor } from './../frontend/core/token.interceptor';


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
    UserModule
  ],
  providers: [
    TokenInterceptor
  ]
})
export class FrontendModule { }
