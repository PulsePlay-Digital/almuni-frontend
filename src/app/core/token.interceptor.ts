import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public notificationService : NotificationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | any = localStorage.getItem('token');

    if (token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    
    return next.handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('event--->>>', event);
            switch (event.body.status) {
              case 200:
                this.notificationService.openSuccessSnackBar(event.body.message);
                break;
              case 422:
                this.notificationService.openFailureSnackBar(event.body.message);
                break;
              case 500:
                this.notificationService.openFailureSnackBar(event.body.message);
                break;
            }
          }
          return event;
        }), catchError((error) => {
          console.error(error);
          return throwError(error.message);
        }));
  }
}