import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniReunionComponent } from './alumni-reunion/alumni-reunion.component';
import { AtGlanceComponent } from './at-glance/at-glance.component';
import { ConnectComponent } from './connect.component';

const routes: Routes = [
  { 
    path: '', component: ConnectComponent,
    children: [
      {
        path: 'connect', component: AtGlanceComponent
      },
      {
        path: 'alumnireunion', component: AlumniReunionComponent
      }
    ]
  },
  { path: '', redirectTo: 'connect', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
