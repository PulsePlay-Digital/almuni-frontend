import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: any;

  constructor(public http: HttpClient) {
    this.url = environment.apiUrl;
  }

  /**
   * Api to get all institutes name
   * @returns 
   */
  public getAllInstitutes() {
    return this.http.get(`${this.url}/all-institute`);
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

  public getData(action?: string) {
    return this.http.get(`${this.url}/${action}`);
  }

  public postData(action?: any, data?: any) {
   if (action?.action === 'create-event' || action?.action === 'create-club') {
      return this.http.post<any>(`${this.url}/${action?.action}`, data);
    } 
    return this.http.post<any>(`${this.url}/${action}`, data);
  }
}
