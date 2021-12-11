import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NumbersOnlyDirective } from './../../core/directives/numbers-only.directive';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    BsDatepickerModule.forRoot()
  ]
})
export class AuthModule { }
