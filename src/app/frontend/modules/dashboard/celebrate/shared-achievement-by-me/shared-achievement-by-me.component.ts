import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TokenInterceptor } from 'src/app/frontend/core/token.interceptor';
import { DataService } from 'src/app/frontend/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shared-achievement-by-me',
  templateUrl: './shared-achievement-by-me.component.html',
  styleUrls: ['./shared-achievement-by-me.component.scss']
})
export class SharedAchievementByMeComponent implements OnInit {
  @Input() heading: any;
  p: number = 1;
  loading: boolean = false;
  imgPath = environment.imgUrl;
  nameSearched: any;
  achievementData: any;
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
    console.log(this.heading)
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
            if(item?.type == "achievement" && item?.user_id == this.currentUser?.id) return item;
          });
        })
      )
      .subscribe((result: any) => {
        console.log(result)
        this.achievementData = result;
        this.loading = false;
      },
      error => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      });
  }

  viewDetail(params: any) {
    this.router.navigate(['/celebrate/journey-detail'], { queryParams: { id: params, type: this.heading } });
  }
}
