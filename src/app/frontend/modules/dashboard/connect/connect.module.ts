import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/frontend/shared/shared.module';
import { AtGlanceComponent } from './at-glance/at-glance.component';
import { AlumniReunionComponent } from './alumni-reunion/alumni-reunion.component';
import { AlumniDrivenEventsComponent } from './alumni-driven-events/alumni-driven-events.component';
import { IndustryConnectComponent } from './industry-connect/industry-connect.component';
import { EventsAtBalajiComponent } from './events-at-balaji/events-at-balaji.component';


@NgModule({
  declarations: [
    ConnectComponent,
    AtGlanceComponent,
    AlumniReunionComponent,
    AlumniDrivenEventsComponent,
    IndustryConnectComponent,
    EventsAtBalajiComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    SharedModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class ConnectModule { }
