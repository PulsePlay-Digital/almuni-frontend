import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniReunionComponent } from './alumni-reunion/alumni-reunion.component';
import { AtGlanceComponent } from './at-glance/at-glance.component';
import { ConnectComponent } from './connect.component';

const routes: Routes = [
  { 
    path: 'connect', component: ConnectComponent,
    children: [
      {
        path: 'at-glance', component: AtGlanceComponent
      },
      {
        path: 'alumnireunion', component: AlumniReunionComponent
      },
      { path: '', redirectTo: 'at-glance', pathMatch: 'full' }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectRoutingModule { }
