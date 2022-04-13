import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-featured-alumni',
  templateUrl: './featured-alumni.component.html',
  styleUrls: ['./featured-alumni.component.scss']
})
export class FeaturedAlumniComponent implements OnInit {
  allFeatured: any;
  imgPath = environment.imgUrl;
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) { }

  ngOnInit(): void {
    this.getAllFeaturedAlumni();
  }

  async getAllFeaturedAlumni() {
    let  action: string = 'all-featured';
    await this.dataService.getData(action).subscribe((res: any) => {
      this.allFeatured = res.data;
    }, error => {
      this.notify.notificationService.openFailureSnackBar(error);
    })
  }

}
