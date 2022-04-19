import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-available-event',
  templateUrl: './available-event.component.html',
  styleUrls: ['./available-event.component.scss']
})
export class AvailableEventComponent implements OnInit {
  allAdmission: any;
  loading: boolean = false;

  constructor(
    public dataService: DataService,
    public _location: Location,
    public notify: TokenInterceptor
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getAllAdmissions();
  }

  /**
   * Function to get all admission
   */
  async getAllAdmissions() {
    let action: string = 'all-admission';
    await this.dataService.getData(action).subscribe((result: any) => {
      if(result.status == 200) {
        this.allAdmission = result?.data;
        this.loading = false;
      }
    }, error => {
      this.notify.notificationService.openFailureSnackBar(error);
    });
  }

  /**
   * Function to redirect previous page
   */
  navigateBack() {
    this._location.back();
  }
}
