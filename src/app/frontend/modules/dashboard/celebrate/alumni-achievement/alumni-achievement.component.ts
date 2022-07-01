import { Component, OnInit } from "@angular/core";
import { map, filter } from "rxjs/operators";
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

  constructor(public dataService: DataService) {
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.getAllAchivement();
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

}
