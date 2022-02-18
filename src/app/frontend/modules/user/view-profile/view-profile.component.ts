import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { AuthService } from "./../../../../frontend/services/auth.service";
import { UserService } from "./../../../../frontend/services/user.service";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.component.html",
  styleUrls: ["./view-profile.component.scss"],
})
export class ViewProfileComponent implements OnInit {
  token: any;
  user: any;
  constructor(
    private authService: AuthService,
    public userService: UserService
  ) {
    // Get token
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
      res.birth_date = moment(new Date()).format('DD-MM-YYYY ');
      this.user = res;
    })
  }
}