import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniDirectoryComponent } from './alumni-directory/alumni-directory.component';
import { CommunityComponent } from './community.component';

const routes: Routes = [
  { 
    path: 'community', 
    component: CommunityComponent
  },
  { 
    path: 'alumni-directory', 
    component: AlumniDirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
