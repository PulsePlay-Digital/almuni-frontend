import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Config } from "./../../../../services/config";
import { environment } from "./../../../../../../environments/environment";
import { DataService } from "./../../../../services/data.service";
import { TokenInterceptor } from "./../../../../core/token.interceptor";

@Component({
  selector: "app-featured-alumni-details",
  templateUrl: "./featured-alumni-details.component.html",
  styleUrls: ["./featured-alumni-details.component.scss"],
})
export class FeaturedAlumniDetailsComponent implements OnInit {
  alumni_details: any;
  type: string = "";
  descriptionHeading: any;
  alumniId: any;
  imgPath = environment.imgUrl;
  loading: boolean = false;
  heading: string = "FEATURED ALUMNI";

  constructor(
    public arouter: ActivatedRoute,
    public config: Config,
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {
    this.arouter.queryParams.subscribe((res: any) => {
      this.alumniId = res?.id;
      this.descriptionHeading = res?.heading;
      this.type = res?.type;
    });
  }

  ngOnInit(): void {
    this.getSingleAlumni();
  }

  /**
   * Function to get alumni by Id
   */
  async getSingleAlumni() {
    this.loading = true;
    let action: string = "single-featured";
    await this.dataService
      .getDataById(action, parseInt(this.alumniId))
      .subscribe(
        (res: any) => {
          this.alumni_details = res?.data;
          this.loading = false;
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        }
      );
  }

  /**
   * Function to navigate on previous page
   */
  back() {
    this.config.navigateBack();
  }
}
