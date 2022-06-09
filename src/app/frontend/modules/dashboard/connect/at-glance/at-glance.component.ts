import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";
import { environment } from "./../../../../../../environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-at-glance",
  templateUrl: "./at-glance.component.html",
  styleUrls: ["./at-glance.component.scss"],
})
export class AtGlanceComponent implements OnInit {
  imgPath : any;
  loading: boolean = false;
  p: number = 1;
  pastEvent: any;
  upcomingEvent: any;
  heading: string = "Events at a Glance";
  currentUser: any;

  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor,
    public router: Router
  ) {
    this.imgPath = environment.imgUrl;
    if (localStorage.hasOwnProperty("currentUser")) {
      this.currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.getAllPastEvents();
    this.getAllUpcomingEvents();
  }
  /**
   * Get all past event Data
   */
   async getAllPastEvents() {
    let action: string = "all-event";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.data.filter((item: any) => {
            let commingDate = item?.date;
            let currentDate = moment(moment.now()).format("YYYY-MM-DD");
            if (moment(currentDate).isAfter(commingDate) == true) {
              return item;
            }
          });
        })
      )
      .subscribe((res: any) => {
          if (res) {
            this.pastEvent = res;
            this.loading = false;
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false
        }
      );
  }
  /**
   * Function to Get all upcoming events
   */
  async getAllUpcomingEvents() {
    let action: string = "all-event";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.data.filter((item: any) => {
            let commingDate = item?.date;
            let currentDate = moment(moment.now()).format("YYYY-MM-DD");
            if (moment(currentDate).isSameOrBefore(commingDate) == true) {
              return item;
            }
          });
        })
      )
      .subscribe((res: any) => {
          if (res) {
            this.upcomingEvent = res;
            this.loading = false;
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        }
      );
  }
}
