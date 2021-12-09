import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:any;

  constructor(public http:HttpClient) { 
    this.url =  environment.apiUrl;
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
}
