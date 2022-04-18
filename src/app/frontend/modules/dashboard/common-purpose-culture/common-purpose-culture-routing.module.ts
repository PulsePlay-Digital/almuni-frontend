import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniConnectVisionComponent } from './alumni-connect-vision/alumni-connect-vision.component';
import { CommonPurposeCultureComponent } from './common-purpose-culture.component';
import { StrategyFrameworkComponent } from './strategy-framework/strategy-framework.component';

const routes: Routes = [
  { path: 'common-purpose-culture', component: CommonPurposeCultureComponent,
    children: [
      { path: 'connect-vision', component: AlumniConnectVisionComponent },
      { path: 'strategy-framework', component: StrategyFrameworkComponent },
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
