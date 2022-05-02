import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../../../services/data.service';
import { environment } from './../../../../../../environments/environment';
import { Config } from "./../../../../services/config";

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  alumniId: any;
  userDetail: any;
  imgPath = environment.imgUrl;
  loading: boolean = false;

  constructor(public arouter: ActivatedRoute, 
    public dataService: DataService, 
    private config: Config,
    public _location: Location) {
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
