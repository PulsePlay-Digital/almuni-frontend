import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TokenInterceptor } from 'src/app/frontend/core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-alumni-journey',
  templateUrl: './alumni-journey.component.html',
  styleUrls: ['./alumni-journey.component.scss']
})
export class AlumniJourneyComponent implements OnInit {

  isPosted: boolean = false;
  isShared: boolean = true;
  journeyByMe: boolean = false;
  title: string =  'Post a Story';
  storyHeading: string = "My Story";
  type: string = 'journey';
  alumniData: any;
  allJourneyCount: any;
  allUserJourneyCount: any;
  currentUser: any;
  
  constructor(
    private dataService: DataService,
    private notify: TokenInterceptor
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.getAllJourney();
    this.countAllUserJourney();
  }

  showViewShared() {
    this.isPosted = true;
    this.isShared = false;
    this.journeyByMe = false;
  }

  showSeekDetail() {
    this.isShared = true;
    this.isPosted = false;
    this.journeyByMe = false;
  }

  sharedJourneyByMe() {
    this.journeyByMe = true;
    this.isShared = false;
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
          return res?.Journey.filter((item: any) => {
            return item?.type == "journey";
          });
        })
      )
      .subscribe((result: any) => {
        this.allJourneyCount = result?.length;
        this.alumniData = result;
      });
  }

  async countAllUserJourney() {
    let action: string = "count-userJourney";
    await this.dataService.getDataById(action, this.currentUser?.id).subscribe(
      (res: any) => {
        if (res) {
          this.allUserJourneyCount = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
}
