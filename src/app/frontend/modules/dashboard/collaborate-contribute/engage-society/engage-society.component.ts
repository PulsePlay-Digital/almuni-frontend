import { Component, OnInit } from '@angular/core';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-engage-society',
  templateUrl: './engage-society.component.html',
  styleUrls: ['./engage-society.component.scss']
})
export class EngageSocietyComponent implements OnInit {
  postedOpportunity: boolean = false;
  postedExpertise: boolean = false;
  heading: string = "ENGAGE WITH SRI BALAJI UNIVERSITY";
  allEvent: any;
  allExpertise: any;
  allOpportunity: any;
  constructor(
    private dataService: DataService,
    private notify: TokenInterceptor
  ) { }

  ngOnInit(): void {
    this.countAllExpertise();
    this.countAllOpportunity();
  }

  viewOpportunity() {
    this.postedOpportunity = !this.postedOpportunity;
    this.postedExpertise = false;
  }

  viewExpertise() {
    this.postedExpertise = !this.postedExpertise;
    this.postedOpportunity = false
  }

  async countAllExpertise() {
    let action: string = "count-expertise";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        console.log(res);
        if (res?.status == 200) {
          this.allExpertise = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  async countAllOpportunity() {
    let action: string = "count-opportunity";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        console.log(res);
        if (res?.status == 200) {
          this.allOpportunity = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
}
