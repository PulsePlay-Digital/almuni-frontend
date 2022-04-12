import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-posted-jobs-by-me',
  templateUrl: './posted-jobs-by-me.component.html',
  styleUrls: ['./posted-jobs-by-me.component.scss']
})
export class PostedJobsByMeComponent implements OnInit {
  currentUser: any;
  postedJobsByMe: any;

  constructor(
    public _location: Location,
    public dataService: DataService
  ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
   }

  ngOnInit(): void {
    this.getAllJobsPosted();
  }

  async getAllJobsPosted() {
    let action: string = 'all-jobs';
    await this.dataService.getData(action).pipe(
      map(((item: any) => {
        return item.data.filter((result: any) => result.id === this.currentUser.id )
      }))
    ).subscribe((jobs => {
      console.log(jobs);
      this.postedJobsByMe = jobs;
    }))
  }

  async changeStatus(status: any) {
    let action: string = 'update-jobs';
    let params = {
      id: JSON.stringify(status.id),
      is_active: status.is_active
      // id: this.params.data.id,
      // is_active: this.status
    }
     await this.dataService.updateData(action, params).subscribe((res: any) => {
      console.log(res)
     })
    console.log(status.id)
  }

  navigateBack() {
    this._location.back();
  }
}
