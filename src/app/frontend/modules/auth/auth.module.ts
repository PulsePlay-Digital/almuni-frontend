import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../frontend/shared/shared.module';
import { NgxCaptchaModule } from 'ngx-captcha';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlumniApprovalFormComponent } from './alumni-approval-form/alumni-approval-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AlumniApprovalFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxCaptchaModule,
    BsDatepickerModule.forRoot()
  ]
})
export class AuthModule { }
