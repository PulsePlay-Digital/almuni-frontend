import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-alumni-passion',
  templateUrl: './alumni-passion.component.html',
  styleUrls: ['./alumni-passion.component.scss']
})
export class AlumniPassionComponent implements OnInit {
  isPassion: boolean = false;
  isShared: boolean = true;
  passionByMe: boolean = false;
  title: string =  'Post a Passion';
  heading: string = "My Passion";
  type: string = 'passion';
  alumniData: any;
  allPassionCount: number | undefined;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllPassion();
  }

  addPassion() {
    this.isPassion = true;
    this.isShared = false;
    this.passionByMe = false;
  }

  seeAllPassion() {
    this.isShared = true;
    this.isPassion = false;
    this.passionByMe = false;
  }

  viewPassionByMe() {
    this.isShared = false;
    this.isPassion = false;
    this.passionByMe = true;
  }

  async getAllPassion() {
    let action: string = "all-journey";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.Journey.filter((item: any) => {
            return item?.type == "passion";
          });
        })
      )
      .subscribe((result: any) => {
        this.allPassionCount = result?.length;
        this.alumniData = result;
      });
  }

}
