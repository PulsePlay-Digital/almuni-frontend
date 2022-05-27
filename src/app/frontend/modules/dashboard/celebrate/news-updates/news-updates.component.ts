import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { TokenInterceptor } from 'src/app/frontend/core/token.interceptor';
import { DataService } from 'src/app/frontend/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.scss']
})
export class NewsUpdatesComponent implements OnInit {

  allNewsUpdates: any;
  imgPath = environment.imgUrl;
  p: number = 1;
  loading: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  heading: string= "NEWS & UPDATES";
  constructor(private dataService: DataService,
    public notify: TokenInterceptor
  ) { }

  ngOnInit(): void {
    this.getAllNews();
  }
  /**
   * Get all news updates
   */
  async getAllNews() {
    let action: string = 'all-news';
    this.loading = true;
    await this.dataService.getData(action).pipe(takeUntil(this.destroy$)).subscribe((res: any) => {
      this.allNewsUpdates = res.data;
      console.log(this.allNewsUpdates)
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
