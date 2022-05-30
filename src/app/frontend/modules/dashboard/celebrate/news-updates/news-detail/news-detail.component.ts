import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from './../../../../../services/data.service';
import { environment } from './../../../../../../../environments/environment';
import { takeUntil } from 'rxjs/operators';
import { TokenInterceptor } from './../../../../../core/token.interceptor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  allNewsUpdates: any;
  newsDetail: any;
  imgPath = environment.imgUrl;
  loading: boolean = false;
  p: number = 1;
  destroy$: Subject<boolean> = new Subject<boolean>();
  heading: string= "NEWS & UPDATES";
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor,
    public arouter: ActivatedRoute
    ) {
      this.arouter.queryParams.subscribe((res: any) => {
        this.newsDetail = res;
      })
     }

  ngOnInit(): void {
    this.getAllNews();
  }

  async getAllNews() {
    let action: string = 'all-news';
    this.loading = true;
    await this.dataService.getData(action).pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      this.allNewsUpdates = res.data;
      this.loading = false;
    }, error => {
      this.notify.notificationService.openFailureSnackBar(error);
      this.loading = false;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }
}
