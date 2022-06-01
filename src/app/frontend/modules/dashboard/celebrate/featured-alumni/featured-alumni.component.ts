import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-featured-alumni',
  templateUrl: './featured-alumni.component.html',
  styleUrls: ['./featured-alumni.component.scss']
})
export class FeaturedAlumniComponent implements OnInit {
  user: any;
  imgPath = environment.imgUrl;
  p: number = 1;
  loading: boolean = false;
  heading: string = "FEATURED ALUMNI";

  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getAllFeaturedAlumni();
  }

  async getAllFeaturedAlumni() {
    let  action: string = 'all-featured';
    await this.dataService.getData(action).subscribe((res: any) => {
      this.user = res.data;
      this.loading = false;
    }, error => {
      this.notify.notificationService.openFailureSnackBar(error);
      this.loading = false;
    })
  }

  viewDetail(params: number) {
    this.router.navigate(['/celebrate/alumni-details'], { queryParams: { id: params, type: 'featured-alumni' } })
  }
  
}
