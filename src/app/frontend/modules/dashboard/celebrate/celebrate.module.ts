import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebrateRoutingModule } from './celebrate-routing.module';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';
import { FeaturedAlumniDetailsComponent } from './featured-alumni-details/featured-alumni-details.component';


@NgModule({
  declarations: [
    FeaturedAlumniComponent,
    FeaturedAlumniDetailsComponent
  ],
  imports: [
    CommonModule,
    CelebrateRoutingModule
  ]
})
export class CelebrateModule { }
