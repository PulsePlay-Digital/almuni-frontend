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
  seeAchievement: boolean = true;
  title: string = "Post a Achievement";
  heading: string = "My Achievement";
  type: string = "achievement";
  alumniData: any;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.getAllAchivement();
  }

  showViewShared() {
    this.shareAchievement = !this.shareAchievement;
    this.seeAchievement = false;
  }

  showSeekDetail() {
    this.seeAchievement = !this.seeAchievement;
    this.shareAchievement = false;
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
        this.alumniData = result;
      });
  }
}
