import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";
import { environment } from "./../../../../../../environments/environment";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-at-glance",
  templateUrl: "./at-glance.component.html",
  styleUrls: ["./at-glance.component.scss"],
})
export class AtGlanceComponent implements OnInit {
  filterForm: FormGroup | any;
  upcomingFilterForm: FormGroup | any;
  imgPath: any;
  loading: boolean = false;
  p: number = 1;
  pastEvent: any;
  upcomingEvent: any;
  heading: string = "Events at a Glance";
  currentUser: any;
  clubsTotal: any;
  valueChange: any;
  pastNameSearched: any;
  upcomingNameSearched: any;
  valChange: any;

  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor,
    public router: Router,
    private fb: FormBuilder
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
    this.buildFilterForm();
    this.buildUpcomingFilterForm();
    this.getAllPastEvents();
    this.getAllUpcomingEvents();
  }

  buildFilterForm() {
    this.filterForm = this.fb.group({
      title: [""],
      type: [""],
    });
  }

  buildUpcomingFilterForm() {
    this.upcomingFilterForm = this.fb.group({
      title: [""],
      type: [""],
    });
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
            this.clubsTotal = res?.length;
            this.loading = false;
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
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
          this.loading = false;
        }
      );
  }

  onTypeChange(event: any) {
    this.valueChange = event;
    if (this.valueChange) {
      this.eventFillter();
    }
  }

  async eventFillter() {
    this.loading = true;
    let action: string = "filter-event";
    let params: any = {
      type: this.valueChange
    };
    if (this.filterForm) {
      await this.dataService
        .postData(action, params)
        .subscribe((result: any) => {
          this.pastEvent = result?.data;
          this.loading = false;
        });
    } else if (this.upcomingFilterForm) {
      await this.dataService
        .postData(action, params)
        .subscribe((result: any) => {
          this.upcomingEvent = result?.data;
          this.loading = false;
        });
    }
  }
}
