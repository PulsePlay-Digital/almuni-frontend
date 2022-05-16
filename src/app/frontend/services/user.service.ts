import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  /**
   * Get user by Id
   * @param id 
   * @returns 
   */
  // public getUsersById(id: any) {
  //   return this.http.get(`${this.url}/user`);
  // }

  public getUsersById(action: string, id: number) {
    return this.http.get(`${this.url}/${action}/${id}`);
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
