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
  title: string =  'Post a Story';
  storyHeading: string = "My Story";
  type: string = 'journey';
  alumniData: any;
  heading: string = "ALUMNI JOURNEY";
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
    this.countAllJourney();
    this.countAllUserJourney();
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

  async countAllJourney() {
    let action: string = "count-project";
    await this.dataService.getData(action, ).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.allJourneyCount = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }


  async countAllUserJourney() {
    let action: string = "count-userJourney";
    await this.dataService.getDataById(action, this.currentUser?.id).subscribe(
      (res: any) => {
        console.log(res);
        if (res?.status == 200) {
          this.allUserJourneyCount = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
}
