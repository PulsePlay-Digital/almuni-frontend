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
     this.router.events.subscribe((res:any) => {
      if(res instanceof NavigationEnd) {
        if (res?.url) {
          res = res.url.split('/');
          if (res.includes('admin')) {
            this.router.navigate(['/admin/dashboard']);
          }
        }
      }
    });
  }
}
