import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Config } from './../../../../services/config';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-project-posted-by-me',
  templateUrl: './project-posted-by-me.component.html',
  styleUrls: ['./project-posted-by-me.component.scss']
})
export class ProjectPostedByMeComponent implements OnInit {
  specialProject: any;
  currentUser: any;
  loading: boolean = false;
  author: any;
  constructor(
    private dataService: DataService,
    private config: Config
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.getAllSpecialProject();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    this.author = fname  + ' ' + lname;
  }

  async getAllSpecialProject() {
    this.loading = true;
    let action: string = "all-project";
    await this.dataService.getData(action).pipe(
      map((item:any) => {
        return item?.data.filter((res:any) => {
          return res?.author === this.author;
        })
      })
    ).subscribe((res: any) => {
      this.specialProject = res;
      this.loading = false;
    }) 
  }

  back() {
    this.config.navigateBack();
  }
}
