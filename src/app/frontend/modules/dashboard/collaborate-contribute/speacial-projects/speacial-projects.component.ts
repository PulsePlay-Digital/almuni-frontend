import { Component, OnInit } from '@angular/core';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-speacial-projects',
  templateUrl: './speacial-projects.component.html',
  styleUrls: ['./speacial-projects.component.scss']
})
export class SpeacialProjectsComponent implements OnInit {

  searchData: boolean = true;
  heading: string = "SPECIAL PROJECTS";
  projectPosted:boolean = false;
  allProjectCount: any;
  allUserProjectCount: any;
  currentUser: any;

  constructor(
    private dataService: DataService,
    private notify: TokenInterceptor
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.countAllProject();
    this.countAllUserProject();
  }

  /**
   * Function to show/hide search data
   */
  search() {
    this.searchData = !this.searchData;
    this.projectPosted = false;
  }
  showSpecialProject() {
    console.log(this.projectPosted)
    this.projectPosted = !this.projectPosted;
    this.searchData = false;
  }

  async countAllProject() {
    let action: string = "count-project";
    await this.dataService.getData(action, ).subscribe(
      (res: any) => {
        console.log(res);
        if (res?.status == 200) {
          this.allProjectCount = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  async countAllUserProject() {
    let action: string = "count-userProject";
    await this.dataService.getDataById(action, this.currentUser?.id).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.allUserProjectCount = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
}
