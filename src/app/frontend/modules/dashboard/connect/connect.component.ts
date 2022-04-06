import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { TokenInterceptor } from "../../../core/token.interceptor";
import { DataService } from "../../../services/data.service";

@Component({
  selector: "app-connect",
  templateUrl: "./connect.component.html",
  styleUrls: ["./connect.component.scss"],
})
export class ConnectComponent implements OnInit {
  pastEvent: any;
  upcomingEvent: any;
  imgPath: any;

  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {
    this.imgPath = environment.imgUrl;
  }

  ngOnInit(): void {
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
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
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
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
        }
      );
  }
}
