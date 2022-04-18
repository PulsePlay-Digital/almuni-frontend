import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni-achievement',
  templateUrl: './alumni-achievement.component.html',
  styleUrls: ['./alumni-achievement.component.scss']
})
export class AlumniAchievementComponent implements OnInit {

  shareAchievement: boolean = false;
  seeAchievement: boolean = false;
  title: string = "Post a Achievement";
  heading: string = "My Achievement";

  constructor() { }

  ngOnInit(): void {
  }

  showViewShared() {
    this.shareAchievement = !this.shareAchievement;
    this.seeAchievement = false;
  }

  showSeekDetail() {
    this.seeAchievement = !this.seeAchievement;
    this.shareAchievement = false;
  }
}
