import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: any;

  constructor(
    public router: Router,
    private authService: AuthService
  ) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      console.log(this.currentUser);
  }

  ngOnInit(): void {
    console.log(this.currentUser)
  }

  /**
   * Function to logout user
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
