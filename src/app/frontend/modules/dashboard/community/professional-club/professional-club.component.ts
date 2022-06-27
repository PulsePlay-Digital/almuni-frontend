import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { environment } from "./../../../../../../environments/environment";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-professional-club",
  templateUrl: "./professional-club.component.html",
  styleUrls: ["./professional-club.component.scss"],
})
export class ProfessionalClubComponent implements OnInit {
  club: boolean = false;
  professionalClub: any;
  loading:boolean | undefined;
  imgPath = environment.imgUrl;
  currentUser;
  lazyLoadImage = "./assets/loading.gif";
  constructor(
    public router: Router,
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {
    this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
  }

  ngOnInit(): void {
    this.getAllProfessionalClub();
  }

  async getAllProfessionalClub() {
    this.loading = true;
    let action: string = "all-club";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.data.filter((item: any) => {
            if (item?.type === "professional") {
              return item;
            }
          });
        })
      )
      .subscribe(
        (res: any) => {
          this.professionalClub = res;
          this.loading = false;
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false
        }
      );
  }
  async joinUnjoinClub(item: any) {
    let params = {
      id: item?.id,
      action: (item?.join_club == 1) ? "unlike-club" : "like-club"
    }
    await this.dataService.postClubData(params, this.currentUser?.id)
      .subscribe((res: any) => {
      this.getAllProfessionalClub();
      this.notify.notificationService.openSuccessSnackBar(res?.message);
        this.loading = false;
      },
        error => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        })
  }
  async clubDetails(item: any) {
    this.router.navigate(["/community/club-details"], {
      queryParams: {
        id: item?.id,
        name: item?.name
      }
    });
  }
  joinClub() {
    this.router.navigate(["/community/start-club"], {
      queryParams: { type: "professional" },
    });
  }
}
