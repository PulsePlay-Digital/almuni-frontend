import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniConnectVisionComponent } from './alumni-connect-vision/alumni-connect-vision.component';
import { CommonPurposeCultureComponent } from './common-purpose-culture.component';

const routes: Routes = [
  { path: 'common-purpose-culture', component: CommonPurposeCultureComponent,
    children: [
      { path: 'connect-vision', component: AlumniConnectVisionComponent },
      {
        path: '',
        redirectTo: 'connect-vision',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonPurposeCultureRoutingModule { }
