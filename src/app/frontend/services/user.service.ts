import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: any;
  token: any;

  constructor(
    public http: HttpClient
  ) { 
    this.url = environment.apiUrl;
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  /**
   * Get user by Id
   * @param id 
   * @returns 
   */
  // public getUsersById(id: any) {
  //   return this.http.get(`${this.url}/user`);
  // }

  public getUsersById(action: string, id: number) {
    return this.http.get(`${this.url}/${action}/${id}`).pipe(catchError(this.handleError));
  }

  public getUsersByStatus(data:any) {
    return this.http.get(`${this.url}/${data.action}/${data.status}`).pipe(catchError(this.handleError));
  }
  public postData(action?: any, data?: any) {
    return this.http.post<any>(`${this.url}/${action?.action}` + '/' + action?.id, data);
  }

   /**
   * Api to filter user data by params
   * @param data 
   * @returns 
   */
    public filterUsers(data: any) {
      return this.http.post(`${this.url}/filter`, data);
    }
}
