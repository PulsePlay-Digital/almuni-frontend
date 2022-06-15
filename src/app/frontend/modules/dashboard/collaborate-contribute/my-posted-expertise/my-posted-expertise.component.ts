import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Config } from './../../../../services/config';
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
  nameSearched: any;
  
  constructor(
    public dataService: DataService,
    public config: Config
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
        return item?.data.filter((res: any) => res?.author === this.author
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
  back() {
    this.config.navigateBack();
  }
}
