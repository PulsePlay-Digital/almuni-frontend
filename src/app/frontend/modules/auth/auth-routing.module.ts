import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../../../frontend/modules/auth/login/login.component';
import { ForgotPasswordComponent } from './../../../frontend/modules/auth/forgot-password/forgot-password.component';
import { RegisterComponent } from './../../../frontend/modules/auth/register/register.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
