import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule),
    data: {breadcrumb: { skip: true }},
  },
  {
    path: '**', redirectTo: '/home'
  }
];

@NgModule({
  imports:  [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
