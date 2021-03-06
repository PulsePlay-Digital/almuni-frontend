import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from './../../../../services/config';
import { environment } from './../../../../../../environments/environment';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-alumni-details',
  templateUrl: './alumni-details.component.html',
  styleUrls: ['./alumni-details.component.scss']
})
export class AlumniDetailsComponent implements OnInit { 
  alumniId: any;
  userDetail: any;
  imgPath = environment.imgUrl;
  loading: boolean = false;

  constructor(public arouter: ActivatedRoute, 
    public dataService: DataService, public config: Config) {
    this.arouter.queryParams.subscribe((res: any) => {
      this.alumniId = res.id;
    })
   }

  ngOnInit(): void {
    this.loading = true;
    this.getSingleUser();
  }

  /**
   * Function to find user by Id
   */
  async getSingleUser() {
    let action: string = "find-user";
    await this.dataService.getDataById(action, this.alumniId).subscribe((res: any) => {
      this.userDetail = res.data;
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
