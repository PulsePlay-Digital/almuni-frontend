import { Component } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sbs-almuni";
  constructor(public router: Router, public aroute: ActivatedRoute) {

  }
  ngOnInit() {
    this.router.events.subscribe((res: any) => {
      console.log(res)
      if (res.routerEvent && res.routerEvent.url != "/admin/dashboard") {
        if (res instanceof NavigationEnd) {
          if (res?.url) {
            res = res.url.split('/');
            if (res.includes('admin')) {
              this.router.navigate(['/admin/dashboard']);
            }
          }
        }
      }
      else if (res && res.routerEvent.url == "/admin/dashboard" || res.url == "/admin/dashboard") {
        this.router.navigate(['/admin/login']);
      }
      else if (res && res.url == "/admin/login" || res.routerEvent.url == "/admin/login") {
        this.router.navigate(['/admin/dashboard']);
      }
    });
  }
}
