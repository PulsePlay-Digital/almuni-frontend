import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-available-jobs',
  templateUrl: './available-jobs.component.html',
  styleUrls: ['./available-jobs.component.scss']
})
export class AvailableJobsComponent implements OnInit {
 allJobs: any;
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor,
    public _location: Location
    ) { }

  ngOnInit(): void {
    this.getAlljobsData();
  }
/**
 * Get all Jobs
 */
  async getAlljobsData() {
    let action: string = 'all-jobs';
    await this.dataService.getData(action).subscribe((res: any) => {
      this.allJobs = res.data;
    }, error => {
      this.notify.notificationService.openFailureSnackBar(error);
    })
  }
/**
 * Navigate to previous page
 */
  navigateBack() {
    this._location.back();
  }
}
