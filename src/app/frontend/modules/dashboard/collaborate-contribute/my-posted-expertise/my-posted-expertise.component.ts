import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-my-posted-expertise',
  templateUrl: './my-posted-expertise.component.html',
  styleUrls: ['./my-posted-expertise.component.scss']
})
export class MyPostedExpertiseComponent implements OnInit {
  allExpertise: any;
  currentUser: any;
  author: any;
  loading: boolean = false;
  constructor(
    public dataService: DataService,
    public location: Location
  ) { 
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.getAllExpertise();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname  + ((mname == null) ? '' : ' ' + mname ) + ' ' + lname;
  }

  /**
   * Function to get all expertise
   */
  async getAllExpertise() {
    let action: string = "all-expertise";
    await this.dataService.getData(action).pipe(
      map((item: any) => {
        return item.data.filter((res: any) => res.author === this.author
        )
      })
    ).subscribe((res: any) => {
      this.allExpertise = res;
      this.loading = false;
    })
  }

  /**
   * Function to redirect previous page
   */
  navigateBack() {
    this.location.back();
  }
}
