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
  constructor(private dataService: DataService,
    private notify: TokenInterceptor) {}

  ngOnInit(): void {
    this.countAllJobs();
  }

  search() {
    this.searchData = !this.searchData;
  }

  async countAllJobs() {
    let action: string = "count-jobs";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        console.log(res);
        if (res?.status == 200) {
          this.allJobsCount = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
}
