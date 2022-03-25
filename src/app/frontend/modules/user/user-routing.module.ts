import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProfileComponent } from './../../../frontend/modules/user/view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ResetPasswordComponent } from '../../shared/components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'view-profile',
    // canActivate: [AuthGuard],
    component: ViewProfileComponent
  },
  {
    path:'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then(m => m.EditProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
