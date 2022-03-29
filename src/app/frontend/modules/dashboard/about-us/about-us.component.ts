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

  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) { 
    this.imgPath = environment.imgUrl;
  }

  ngOnInit(): void {
    this.getAllTeam();
  }

  async getAllTeam() {
    let action:string = 'all-team';
    await this.dataService.getData(action).subscribe((res: any) => {
      if(res?.status == 200) {
        this.teamData = res.data;
        console.log(this.teamData);
      }
    },error => {
      this.notify.notificationService.openFailureSnackBar(error);
    })
  }
}
