import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtGlanceComponent } from './at-glance/at-glance.component';
import { ConnectComponent } from './connect.component';
import { ViewEventDetailComponent } from './view-event-detail/view-event-detail.component';

const routes: Routes = [
  {
    path: 'connect', component: ConnectComponent,
    children: [
      {
        path: 'at-glance', component: AtGlanceComponent
      },
      {
        path: 'event-detail', component: ViewEventDetailComponent
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
