import { Component, OnInit } from '@angular/core';
import { TokenInterceptor } from './../../../core/token.interceptor';
import { environment } from './../../../../../environments/environment';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  teamData: any;
  imgPath: any;
  loading: boolean = true;

  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) { 
    this.imgPath = environment.imgUrl;
  }

  ngOnInit(): void {
    this.loading = true;
    this.getAllTeam();
    this.loading = false;
  }

  /**
   * Get all Team Data
   */
  async getAllTeam() {
    let action:string = 'all-team';
    await this.dataService.getData(action).subscribe((res: any) => {
      if(res?.status == 200) {
        this.teamData = res.data;
      }
    },error => {
      this.notify.notificationService.openFailureSnackBar(error);
    })
  }
}
