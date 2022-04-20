import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { KeyContactComponent } from './key-contact/key-contact.component';
import { SocialLinksComponent } from './social-links/social-links.component';

const routes: Routes = [
  { 
    path: 'contact', component: ContactComponent,
    children: [
      { path: 'key-contact', component: KeyContactComponent },
      { path: 'social-links', component: SocialLinksComponent },
      {
        path: '',
        redirectTo: 'key-contact',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
