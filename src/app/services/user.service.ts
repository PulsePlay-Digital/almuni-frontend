import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

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
  public getUsersById(id: any) {
    return this.http.get(`${this.url}/user`);
  }
}
