import { Component, OnInit } from "@angular/core";
import { Config } from "./../../../../services/config";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-available-jobs",
  templateUrl: "./available-jobs.component.html",
  styleUrls: ["./available-jobs.component.scss"],
})
export class AvailableJobsComponent implements OnInit {
  allJobs: any;
  loading: boolean = false;
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor,
    public config: Config
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getAlljobsData();
  }
  /**
   * Get all Jobs
   */
  async getAlljobsData() {
    let action: string = "all-jobs";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        this.allJobs = res.data;
        this.loading = false;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
  /**
   * Navigate to previous page
   */
  back() {
    this.config.navigateBack();
  }
}
