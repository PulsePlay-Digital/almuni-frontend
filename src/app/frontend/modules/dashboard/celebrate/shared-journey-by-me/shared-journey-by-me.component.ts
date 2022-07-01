import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';
import { environment } from './../../../../../../environments/environment';

@Component({
  selector: 'app-shared-journey-by-me',
  templateUrl: './shared-journey-by-me.component.html',
  styleUrls: ['./shared-journey-by-me.component.scss']
})
export class SharedJourneyByMeComponent implements OnInit {
  @Input() heading: any;
  p: number = 1;
  loading: boolean = false;
  imgPath = environment.imgUrl;
  nameSearched: any;
  alumniData: any;
  currentUser: any;
  constructor(
    private dataService: DataService,
    private router: Router,
    private notify: TokenInterceptor
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.getAllJourney();
  }

  /**
   * Function to get all journey 
   */
   async getAllJourney() {
    this.loading = true;
    let action: string = "all-journey";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.Journey.filter((item: any) => {
            if(item?.type == "journey" && item?.user_id == this.currentUser?.id) return item;
          });
        })
      )
      .subscribe((result: any) => {
        console.log(result)
        this.alumniData = result;
        this.loading = false;
      },
      error => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      });
  }

  viewDetail(params: any) {
    this.router.navigate(['/celebrate/detail-page'], { queryParams: { id: params, type: this.heading } });
  }
}
