import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path:'', component: UserComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'user-detail',
        component: UserDetailComponent
      },
      {
        path: 'all-users',
        component: AllUsersComponent
      },
      {
        path: 'view-user',
        component: ViewUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
