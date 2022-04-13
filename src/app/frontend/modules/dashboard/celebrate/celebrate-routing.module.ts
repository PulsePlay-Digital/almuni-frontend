import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrateComponent } from './celebrate.component';
import { FeaturedAlumniDetailsComponent } from './featured-alumni-details/featured-alumni-details.component';
import { FeaturedAlumniComponent } from './featured-alumni/featured-alumni.component';

const routes: Routes = [
  { path: 'celebrate', component: CelebrateComponent,
  children: [
    { path: 'featured-alumni', component: FeaturedAlumniComponent },
    { path: 'featured-alumni-details', component: FeaturedAlumniDetailsComponent },
    {
      path: '',
      redirectTo: 'featured-alumni',
      pathMatch: 'full'
    },
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelebrateRoutingModule { }
