import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: any;
  validLogin: any;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(public http: HttpClient) {
    this.url = environment.apiUrl;
  }

  /**
   * Api to register user
   * @param data 
   * @returns 
   */
  public register(data: any) {
    return this.http.post(`${this.url}/create-register`, data, { headers: this.headers });
  }

  /**
   * Api to login user
   * @param data 
   * @returns 
   */
  public login(data: any) {
    return this.http.post(`${this.url}/login`, data, { headers: this.headers });
  }

  public isAuthenticated() {
      const valid: boolean = Boolean(localStorage.getItem('token')) || false;
      console.log(valid);
      if (valid !== undefined || valid !== null) {
        this.validLogin = valid;
      } else {
        this.validLogin = null;
      }
      return this.validLogin;
  }
}
