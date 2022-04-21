import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniDrivenEventsComponent } from './alumni-driven-events/alumni-driven-events.component';
import { AlumniReunionComponent } from './alumni-reunion/alumni-reunion.component';
import { AtGlanceComponent } from './at-glance/at-glance.component';
import { ConnectComponent } from './connect.component';
import { EventsAtBalajiComponent } from './events-at-balaji/events-at-balaji.component';
import { IndustryConnectComponent } from './industry-connect/industry-connect.component';

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
      {
        path: 'drivenevent', component: AlumniDrivenEventsComponent
      },
      {
        path: 'almamater', component: EventsAtBalajiComponent
      },
      {
        path: 'professionalevent', component: IndustryConnectComponent
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
