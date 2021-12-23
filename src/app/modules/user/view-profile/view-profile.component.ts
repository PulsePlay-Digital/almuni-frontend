import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { UserService } from './../../../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  token: any;
  user: any;

  constructor(
    private authService: AuthService,
    public userService: UserService
  ) { 
    this.token = this.authService.getToken();
  }

  ngOnInit(): void {
    this.getUserById();
  }

  /**
   * Function to get user by its id
   */
  async getUserById() {
    await this.userService.getUsersById(this.token).subscribe((res: any) => {
      console.log(res, 'res');
      res.birth_date = moment(new Date()).format('DD-MM-YYYY ');
      this.user = res;
    })
  }
}
