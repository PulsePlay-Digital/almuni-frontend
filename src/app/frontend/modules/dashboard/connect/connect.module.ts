import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from 'src/app/frontend/shared/shared.module';
import { AtGlanceComponent } from './at-glance/at-glance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ViewEventDetailComponent } from './view-event-detail/view-event-detail.component';


@NgModule({
  declarations: [
    ConnectComponent,
    AtGlanceComponent,
    ViewEventDetailComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    MatTabsModule,
    MatCardModule,
    CKEditorModule,
    BsDatepickerModule.forRoot()
  ]
})
export class ConnectModule { }
