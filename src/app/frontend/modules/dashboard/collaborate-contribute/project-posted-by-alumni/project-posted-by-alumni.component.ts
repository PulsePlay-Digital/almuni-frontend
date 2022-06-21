import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-project-posted-by-alumni',
  templateUrl: './project-posted-by-alumni.component.html',
  styleUrls: ['./project-posted-by-alumni.component.scss']
})
export class ProjectPostedByAlumniComponent implements OnInit {
specialProjectByAlumni: any;
loading: boolean = false;
  currentUser: any;

  constructor(
    public dataService: DataService
    ) { 
      if (localStorage) {
        this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      }
    }

  ngOnInit(): void {
    this.loading = true;
    this.getSpecialAllProject();
  }

  async getSpecialAllProject() {
    let action: string = 'all-project';
    await this.dataService.getData(action).subscribe((result: any) => {
      this.specialProjectByAlumni = result.data;
      this.loading = false;
    })
  }

  async requestSent(item: any) {
    let action: string = "create-projectRequest";
    let params = {
      user_id: this.currentUser?.id,
      project_id: item?.id,
      project_owner_id: item?.user_id
    }
    await this.dataService.postData(action, params).subscribe((res: any) => {
      console.log(res);
    });
  }
}
