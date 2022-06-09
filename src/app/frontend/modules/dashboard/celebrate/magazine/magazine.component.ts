import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../../../services/data.service";
import { Config } from "./../../../../services/config";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { environment } from "./../../../../../../environments/environment";

@Component({
  selector: "app-magazine",
  templateUrl: "./magazine.component.html",
  styleUrls: ["./magazine.component.scss"],
})
export class MagazineComponent implements OnInit {
  heading: string = "CORPORATE CITIZEN MAGAZINE";
  allMagazine: any;
  loading: boolean = false;
  imgPath = environment.imgUrl;
  p: number = 1;

  constructor(public config: Config, 
    public dataService: DataService, 
    public notify: TokenInterceptor) {}

  ngOnInit(): void {
    this.getAllMagazine();
  }

  /**
   * Function to get all magazine
   */
  async getAllMagazine() {
    this.loading = true;
    let action: string = "all-magazine";
    await this.dataService.getData(action).subscribe((res: any) => {
      this.allMagazine = res?.Magazine;
      this.loading = false;
    },
    error => {
      this.notify.notificationService.openFailureSnackBar(error);
      this.loading = false;
    })
  }

  /**
   * Function to navigate on previous page
   */
  back() {
    this.config.navigateBack();
  }
}
