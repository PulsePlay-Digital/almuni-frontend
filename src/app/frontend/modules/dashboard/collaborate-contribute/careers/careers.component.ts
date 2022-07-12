import { Component, OnInit } from "@angular/core";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-careers",
  templateUrl: "./careers.component.html",
  styleUrls: ["./careers.component.scss"],
})
export class CareersComponent implements OnInit {
  searchData: boolean = true;
  heading: string = "CAREERS AND JOBS";
  allJobsCount: any;
  currentUser: any;
  allJobsByMe: any;
  constructor(
    private dataService: DataService,
    private notify: TokenInterceptor
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser") || "");
  }

  ngOnInit(): void {
    this.countAllJobs();
    this.countAllJobsByMe();
  }

  search() {
    this.searchData = true;
  }

  async countAllJobs() {
    let action: string = "count-jobs";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        this.allJobsCount = res?.data;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  async countAllJobsByMe() {
    let action: string = "count-userJobs";
    await this.dataService.getDataById(action, this.currentUser?.id).subscribe(
      (res: any) => {
        this.allJobsByMe = res?.data;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
}
