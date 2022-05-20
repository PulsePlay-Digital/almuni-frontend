import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "./../../../services/data.service";
import { AuthService } from "./../../../services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  currentUser: any;

  constructor(
    public router: Router,
    private authService: AuthService,
    public dataService: DataService
  ) {
    if (localStorage.hasOwnProperty("currentUser")) {
      this.currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
    }
  }

  ngOnInit(): void {}

  /**
   * Function to logout user
   */
  logout() {
    this.authService.logout();
    location.assign("/");
  }
  /**
   * Scroll target Section
   * @param sectionId
   */
  target(sectionId: any) {
    this.dataService.scrollSection.next(sectionId);
  }
}
