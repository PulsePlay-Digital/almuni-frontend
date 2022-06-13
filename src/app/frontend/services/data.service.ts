import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: any;
  public scrollSection = new Subject<any>();

  constructor(public http: HttpClient) {
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
   * Api to get all institutes name
   * @returns 
   */
  public getAllInstitutes() {
    return this.http.get(`${this.url}/all-institute`).pipe(catchError(this.handleError));
  }

  /**
   * Api to get all Batch year
   */
  public getAllBatches() {
    return this.http.get(`${this.url}/all-batch`);
  }

  /**
   * Api to get all security questions
   * @returns 
   */
  public getAllQuestions() {
    return this.http.get(`${this.url}/all-questions`);
  }

  public getData(action?: any) {
    // console.log(action)
    // if (action?.action == 'filter-event') {
    //   let params:any = {
    //     type:action.type
    //   }
    //   return this.http.get(`${this.url}/${action?.action}?type=${action.type}`, params);  
    // }
    return this.http.get(`${this.url}/${action}`);
  }

  public getDataById(action: any, id: number) {
    return this.http.get(`${this.url}/${action}/${id}`);
  }

  public postData(action?: any, data?: any) {
    if (action?.action === 'create-event' || action?.action === 'create-club'
      || action?.action === 'create-journey' || action?.action == 'filter-event') {
      return this.http.post<any>(`${this.url}/${action?.action}`, data);
    }
    return this.http.post<any>(`${this.url}/${action}`, data);
  }

  updateData(action: any, data: any) {
    if (action?.action === 'update-user' || action?.action == 'profile-pic') {
      return this.http.post(`${this.url}/${action?.action}/${action?.id}`, data);
    }
    return this.http.put(`${this.url}/${action}/${data?.id}`, data);
  }

  getLocaltionData(action: any) {
    return this.http.get(`${this.url}/${action}`);
  }

  public scrollSec() {
    this.scrollSection.next();
  }
}
