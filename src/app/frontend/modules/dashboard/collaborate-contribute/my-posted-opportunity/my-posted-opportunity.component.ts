import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/frontend/services/data.service';

@Component({
  selector: 'app-my-posted-opportunity',
  templateUrl: './my-posted-opportunity.component.html',
  styleUrls: ['./my-posted-opportunity.component.scss']
})
export class MyPostedOpportunityComponent implements OnInit {
  allOpportunity: any;
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
    this.getAllOpportunity();
    let fname = this.currentUser?.first_name;
    let lname = this.currentUser?.last_name;
    let mname = this.currentUser?.middle_name;
    this.author = fname  + ' ' + lname;
  }

  /**
   * Function to get all opportunity
   */
  async getAllOpportunity() {
    this.loading = true;
    let action: string = "all-opportunity";
    await this.dataService.getData(action).pipe(
      map((item: any) => {
        return item?.data.filter((res: any) => res?.author === this.author
        )
      })
    ).subscribe((res: any) => {
      this.allOpportunity = res;
      this.loading = false;
    },
    error => {
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
