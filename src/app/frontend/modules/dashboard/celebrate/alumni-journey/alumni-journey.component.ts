import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-alumni-journey',
  templateUrl: './alumni-journey.component.html',
  styleUrls: ['./alumni-journey.component.scss']
})
export class AlumniJourneyComponent implements OnInit {

  isPosted: boolean = false;
  isShared: boolean = true;
  title: string =  'Post a Story';
  heading: string = "My Story";
  type: string = 'journey';
  alumniData: any;
  
  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllJourney();
  }

  showViewShared() {
    this.isPosted = !this.isPosted;
    this.isShared = false;
  }

  showSeekDetail() {
    this.isShared = !this.isShared;
    this.isPosted = false;
  }

  /**
   * Function to get all journey 
   */
  async getAllJourney() {
    let action: string = "all-journey";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.Journey.filter((item: any) => {
            return item?.type == "journey";
          });
        })
      )
      .subscribe((result: any) => {
        this.alumniData = result;
      });
  }
}
