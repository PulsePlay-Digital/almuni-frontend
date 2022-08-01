import { Component, OnInit } from "@angular/core";
import { map, filter } from "rxjs/operators";
import { TokenInterceptor } from "src/app/frontend/core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-alumni-achievement",
  templateUrl: "./alumni-achievement.component.html",
  styleUrls: ["./alumni-achievement.component.scss"],
})
export class AlumniAchievementComponent implements OnInit {
  shareAchievement: boolean = false;
  seeAchievement: boolean = false;
  viewAchievement: boolean = true;
  title: string = "Post a Achievement";
  heading: string = "My Achievement";
  type: string = "achievement";
  alumniData: any;
  allAchievementCount: number | undefined;
  currentUser: any;
  allUserAchievementCount: any;

  constructor(
    private dataService: DataService,
    private notify: TokenInterceptor
    ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.getAllAchivement();
    this.countAllUserAchievement();
  }

  sharedAchievementByMe() {
    this.shareAchievement = true;
    this.seeAchievement = false;
    this.viewAchievement = false;
  }

  seeAchievementByMe() {
    this.shareAchievement = false;
    this.seeAchievement = true;
    this.viewAchievement = false;
  }

  seeAllAchievement() {
    this.shareAchievement = false;
    this.seeAchievement = false;
    this.viewAchievement = true;
  }

/**
 * Function to Get all achievement from journey
 */
  async getAllAchivement() {
    let action: string = "all-journey";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.Journey.filter((item: any) => {
            return item?.type == "achievement";
          });
        })
      )
      .subscribe((result: any) => {
        this.allAchievementCount = result?.length;
        this.alumniData = result;
      });
  }

  async countAllUserAchievement() {
    let action: string = "count-userAchievement";
    await this.dataService.getDataById(action, this.currentUser?.id).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.allUserAchievementCount = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
}
