import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { DataService } from "src/app/frontend/services/data.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  currentUser;
  visitorCout: any;
  constructor(private dataService: DataService, private router: Router) {
    if (localStorage.hasOwnProperty("currentUser")) {
      this.currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
    }
  }

  ngOnInit(): void {
    this.getVisitorCount();
  }
  /**
   * Scroll target Section
   * @param sectionId
   */
  target(sectionId: any) {
    this.dataService.scrollSection.next(sectionId);
  }

  async getVisitorCount() {
    let action: string = "all-visitor";
    await this.dataService
      .getData(action)
      .subscribe((res: any) => {
        this.visitorCout = res?.total;
      });
  }
  navigate(r: string) {
    if (r == 'past' || r == 'upcomming') {
      this.router.navigate([ '/connect/at-glance' ], { queryParams: { tab: r}, skipLocationChange: true  });
    } else {
      this.currentUser ? this.router.navigate([r]) : this.router.navigate(['/login']);
    }
  }
}
