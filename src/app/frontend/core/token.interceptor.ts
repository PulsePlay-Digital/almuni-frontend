import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public notificationService: NotificationService,
    public authService: AuthService,
    public router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const getToken: string | any = localStorage.getItem('token');
    let token = JSON.parse(getToken);
    
    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    return next.handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
          return event;
        }), catchError((error) => {
          console.log(error)
          if (error?.error?.message == 'Unauthenticated.') {
            this.router.navigate(['login']);
          }else if (error?.status == 404) {
            console.log(error);
          } else if (error?.status == 0) {
            console.log(error);
          } else if (error?.status == 500) {
            return throwError(error?.error?.message);
          }
          else if (error?.status == 401) {
            this.router.navigate(['login']);
            // return throwError(error?.error?.message);
          }
          
          return throwError(error);
        }));
  }
}