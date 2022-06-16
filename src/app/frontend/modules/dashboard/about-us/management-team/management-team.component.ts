import { Component, OnInit } from '@angular/core';
import { TokenInterceptor } from 'src/app/frontend/core/token.interceptor';
import { DataService } from 'src/app/frontend/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-management-team',
  templateUrl: './management-team.component.html',
  styleUrls: ['./management-team.component.scss']
})
export class ManagementTeamComponent implements OnInit {
  teamData: any = [];
  imgPath: any;
  loading: boolean = true;
  p: number = 1;
  heading: string= "LEADERSHIP TEAM";
  lazyLoadImage = './assets/loading.gif';
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
    this.loading = true;
    let action:string = 'all-team';
    await this.dataService.getData(action).subscribe((res: any) => {
      if(res?.status == 200) {
        this.teamData = res?.data;
        this.loading = false;
      }
    },error => {
      this.notify.notificationService.openFailureSnackBar(error);
      this.loading = false;
    })
  }

}
