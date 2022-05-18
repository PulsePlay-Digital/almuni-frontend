import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPurposeCultureRoutingModule } from './common-purpose-culture-routing.module';
import { CommonPurposeCultureComponent } from './common-purpose-culture.component';
import { AlumniConnectVisionComponent } from './alumni-connect-vision/alumni-connect-vision.component';
import { SharedModule } from './../../../shared/shared.module';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';


@NgModule({
  declarations: [
    CommonPurposeCultureComponent,
    AlumniConnectVisionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommonPurposeCultureRoutingModule,
    NgDynamicBreadcrumbModule
  ]
})
export class CommonPurposeCultureModule { }
