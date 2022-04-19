import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonPurposeCultureRoutingModule } from './common-purpose-culture-routing.module';
import { CommonPurposeCultureComponent } from './common-purpose-culture.component';
import { AlumniConnectVisionComponent } from './alumni-connect-vision/alumni-connect-vision.component';
import { StrategyFrameworkComponent } from './strategy-framework/strategy-framework.component';


@NgModule({
  declarations: [
    CommonPurposeCultureComponent,
    AlumniConnectVisionComponent,
    StrategyFrameworkComponent
  ],
  imports: [
    CommonModule,
    CommonPurposeCultureRoutingModule
  ]
})
export class CommonPurposeCultureModule { }
