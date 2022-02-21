import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: any;
  validLogin: any;

  constructor(public http: HttpClient) {
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
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return (user !== null) ? true : false;
    // const valid: boolean = Boolean(localStorage.getItem('currentUser')) || false;
    // console.log(valid);
    // if (valid !== undefined || valid !== null) {
    //   this.validLogin = valid;
    // } else {
    //   this.validLogin = null;
    // }
    // return this.validLogin;
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
   * Function to remove token from localstorage
   */
  public logout() {
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }
}
