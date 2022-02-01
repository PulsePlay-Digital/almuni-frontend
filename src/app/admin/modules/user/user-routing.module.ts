import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
