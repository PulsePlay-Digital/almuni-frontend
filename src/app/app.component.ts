import { Component } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from "@angular/router";
import { filter } from "rxjs/internal/operators/filter";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sbs-almuni";
  currentUser: any;
  public href: string = "";
  constructor(public router: Router, public aroute: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(this.currentUser);


  }
  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
    if (this.currentUser && this.currentUser?.user?.role == 0) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.router.navigate(['/admin/login']);
    }
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        console.log(event);

        if (event.url == "/admin/dashboard") {
          if (JSON.stringify(this.currentUser) === '{}') {
            this.router.navigate(['/admin/login']);
          }
          else {
            this.router.navigate(['/admin/dashboard']);
          }
        }
      });
  }
}
