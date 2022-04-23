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
  title: string =  'Post a Passion';
  heading: string = "My Passion";
  type: string = 'passion';
  alumniData: any;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllPassion();
  }

  showViewShared() {
    this.isPassion = !this.isPassion;
    this.isShared = false;
  }

  showSeekDetail() {
    this.isShared = !this.isShared;
    this.isPassion = false;
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
        this.alumniData = result;
      });
  }
}
