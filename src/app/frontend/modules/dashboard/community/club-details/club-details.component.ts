import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../../../services/config';
import { environment } from '../../../../../../environments/environment';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss']
})
export class ClubDetailsComponent implements OnInit { 
  clubId: any;
  clubName:any;
  userDetail: any;
  imgPath = environment.imgUrl;
  loading: boolean = false;
  constructor(public arouter: ActivatedRoute, 
    public dataService: DataService, public config: Config) {
    this.arouter.queryParams.subscribe((res: any) => {
      this.clubId = res?.id;
      this.clubName = res?.name;
    })
   }

  ngOnInit(): void {
    // this.loading = true;
  }


  /**
   * Function to redirect previous page
   */
  back() {
    this.config.navigateBack();
  }
}
