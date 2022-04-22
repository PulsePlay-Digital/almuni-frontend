import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";
import { environment } from "./../../../../../../environments/environment";

@Component({
  selector: "app-alumni-reunion",
  templateUrl: "./alumni-reunion.component.html",
  styleUrls: ["./alumni-reunion.component.scss"],
})
export class AlumniReunionComponent implements OnInit {
  imgPath = environment.imgUrl;
  loading: boolean = false;

  pastEvent: any;
  upcomingEvent: any;
  eventCategory: string = "alumniReunion";
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {}

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
      .subscribe(
        (res: any) => {
          if (res) {
            this.pastEvent = res;
            this.loading = false;
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
      .subscribe(
        (res: any) => {
          if (res) {
            this.upcomingEvent = res;
            this.loading = false;
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
        }
      );
  }
}
