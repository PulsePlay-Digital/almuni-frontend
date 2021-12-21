import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: any;
  validLogin: any;
  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json'
  // });

  constructor(
    public http: HttpClient,
    public router: Router
  ) {
    this.url = environment.apiUrl;
  }

  /**
   * Api to register user
   * @param data 
   * @returns 
   */
  public register(data: any) {
    return this.http.post(`${this.url}/create-register`, data);
  }

  /**
   * Api to login user
   * @param data 
   * @returns 
   */
  public login(data: any) {
    return this.http.post(`${this.url}/login`, data);
  }

  /**
   * Function to get with token
   * @returns 
   */
  public isAuthenticated() {
    const valid: boolean = Boolean(localStorage.getItem('token')) || false;
    if (valid !== undefined || valid !== null) {
      this.validLogin = valid;
    } else {
      this.validLogin = null;
    }
    return this.validLogin;
  }

  /**
  * Api to forgot password
  * @param data 
  * @returns 
  */
  public forgotPassword(data: any) {
    return this.http.post(`${this.url}/forgot-password`, data);
  }

  /**
   * Function to get token from Login user
   * @returns 
   */
  getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Function to logout user
   */
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
