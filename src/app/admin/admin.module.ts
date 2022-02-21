import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './../admin/modules/auth/auth.guard';
import { AuthService } from './../admin/services/auth.service';
import { CommonService } from './services/common.service';
import { CountryService } from './../admin/services/country.service';
import { DataService } from './../admin/services/data.service';
import { UsersService } from './services/users.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './../admin/modules/user/user.module';
import { TokenInterceptor } from './../admin/core/token.interceptor';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule,
    UserModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthGuard,
    AuthService,
    CommonService,
    CountryService,
    DataService,
    UsersService,
    TokenInterceptor
  ]
})
export class AdminModule { }
