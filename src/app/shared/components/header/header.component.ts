import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogin: Boolean;

  constructor(
    public router: Router,
    private authService: AuthService
  ) {
    this.isLogin = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
  }

  /**
   * Function to logout user
   */
  logout() {
    this.authService.logout();
  }
  
  // openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  // }
  
  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }
}
