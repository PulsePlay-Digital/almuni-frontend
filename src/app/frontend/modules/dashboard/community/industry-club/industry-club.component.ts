import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { environment } from "./../../../../../../environments/environment";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-industry-club",
  templateUrl: "./industry-club.component.html",
  styleUrls: ["./industry-club.component.scss"],
})
export class IndustryClubComponent implements OnInit {
  club: boolean = false;
  heading: string = "industry club";
  industry: any;
  loading: boolean | undefined;
  imgPath = environment.imgUrl;
  constructor(
    public router: Router,
    public dataService: DataService,
    public notify: TokenInterceptor) {}

  ngOnInit(): void {
    this.getAllindustryClub();
  }

  async getAllindustryClub() {
    this.loading = true;
    let action: string = "all-club";
    await this.dataService.getData(action)
    .pipe(
      map((res: any) => {
        return res.data.filter((item: any) => {
          if (item?.type === "industry") {
            return item;
          }
        });
      })
    )
    .subscribe((res:any) => {
      this.industry = res;
      this.loading = false;
    },
    error => {
      this.notify.notificationService.openFailureSnackBar(error);
      this.loading = false;
    })
  }

  joinUnjoin() {
    this.club = !this.club;
  }

  joinClub() {
    this.router.navigate(["/community/start-club"], {
      queryParams: { type: "industry" },
    });
  }
}
