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
  currentUser;
  constructor(
    public router: Router,
    public dataService: DataService,
    public notify: TokenInterceptor) { 
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      console.log(this.currentUser);
    }

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
      .subscribe((res: any) => {
        this.industry = res;
        this.loading = false;
      },
        error => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        })
  }

  async joinUnjoinClub(item: any) {
    // this.club = !this.club;
    console.log(item)
    this.loading = true;
    let params = {
      id: item.id,
      action: (item.join_club == 1) ? "unlike-club" : "like-club"
    }
    await this.dataService.postClubData(params, this.currentUser.id)
      .subscribe((res: any) => {
      this.getAllindustryClub();
        this.loading = false;
      },
        error => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        })
  }

  joinClub() {
    this.router.navigate(["/community/start-club"], {
      queryParams: { type: "industry" }
    });
  }
}
