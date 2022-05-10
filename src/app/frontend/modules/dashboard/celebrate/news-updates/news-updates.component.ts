import { Component, OnInit } from '@angular/core';
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
    await this.dataService.getData(action).subscribe((res: any) => {
      this.allNewsUpdates = res.data;
      this.loading = false;
    }, error => {
      this.notify.notificationService.openFailureSnackBar(error);
    })
  }
}
