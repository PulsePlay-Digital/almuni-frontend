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
  heading: string = "professional club";
  professionalClub: any;
  loading:boolean | undefined;
  imgPath = environment.imgUrl;

  constructor(
    public router: Router,
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {}

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
  joinUnjoin(data: any) {
    this.club = !this.club;
    console.log(this.club);
  }

  joinClub() {
    this.router.navigate(["/community/start-club"], {
      queryParams: { type: "professional" },
    });
  }
}
