import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../../../frontend/modules/auth/login/login.component';
import { ForgotPasswordComponent } from './../../../frontend/modules/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './../../../frontend/modules/auth/register/register.component';
import { AlumniApprovalFormComponent } from './alumni-approval-form/alumni-approval-form.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  },
  {
    path: 'alumni-approval-form', component: AlumniApprovalFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
