import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: any;

  constructor(public http: HttpClient) {
    this.url = environment.apiUrl;
  }
  /**
   * Api to get all users
   * @returns 
   */
  public getAllUsers() {
    return this.http.get(`${this.url}/all-users`);
  }
  /**
   * Api to get user By Id
   * @param id 
   * @returns 
   */
  public getUsersById(id: number) {
    return this.http.get(`${this.url}/find-user/${id}`);
  }

  /**
   * Api to delete user by Id
   * @param id 
   * @returns 
   */
  public deleteUserById(id: number) {
    return this.http.delete(`${this.url}/delete-user/${id}`);
  }

  public isActiveUser(data: any) {
    return this.http.put(`${this.url}/user-verify`, data);
  }
}
