import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user_count: any;
  loading: boolean | any;
  
  constructor(
    public commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.getAllCount();
  }

  /**
   * Get count of all registerd users
   */
   async getAllCount() {
    await this.commonService.getAllCount().subscribe((res: any) => {
      this.user_count = res.total_users;
    });
  }
}
