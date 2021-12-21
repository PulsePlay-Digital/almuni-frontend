import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {
  token: any;
  constructor(
    private authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.token = this.authService.getToken();
    console.log(JSON.parse(this.token), 'toek')
    this.getUserById()
  }

  /**
   * Function to get user by its id
   */
  async getUserById() {
    await this.userService.getUsersById(JSON.parse(this.token)).subscribe((res: any) => {
      console.log(res, 'res');
    })
  }
}
