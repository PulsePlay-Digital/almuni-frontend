import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { ResetPasswordComponent } from './shared/components/reset-password/reset-password.component';
import { ViewMapComponent } from './shared/components/view-map/view-map.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'view-map',
        component: ViewMapComponent
      },
      {
        path: '',
        loadChildren: () => import('./../frontend/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: '',
        loadChildren: () => import('./../frontend/modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: '',
        loadChildren: () => import('./../frontend/modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
