import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/admin/dashboard",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import("./modules/user/user.module").then((m) => m.UserModule),
      },
      {
        path: '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
