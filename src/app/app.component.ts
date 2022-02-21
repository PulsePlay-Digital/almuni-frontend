import { Component } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from "@angular/router";
import { filter } from "rxjs/internal/operators/filter";
import { AuthService } from "./admin/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sbs-almuni";
  currentUser: any;
  public href: string = "";
  constructor(public router: Router, public aroute: ActivatedRoute, public authService: AuthService) {
    this.currentUser = this.authService.isAuthenticated();
    console.log(this.currentUser);
  }

  ngOnInit() {
    this.href = this.router.url;
    // if (this.currentUser !== null && this.currentUser?.user?.role == 0) {
    //   this.router.navigate(['/admin/dashboard']);
    // } else {
    //   this.router.navigate(['/admin/login']);
    // }
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        console.log(event);
        console.log(this.currentUser);
        if (event.url == "/admin" || event.url == "/admin/login" || event.url == "/admin/dashboard") {
          console.log('2')
          if (JSON.stringify(this.currentUser == '{}')) {
            console.log('hh')
            this.router.navigate(['/admin/login']);
          }
          else{
            this.router.navigate(['/admin/dashboard']);
          }
        }
      });
  }
}
