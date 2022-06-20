import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEntrepreneurshipComponent } from './../../../../shared/components/dialog-entrepreneurship/dialog-entrepreneurship.component';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';
import { UserService } from './../../../../services/user.service';

@Component({
  selector: 'app-entrepreneurship-club',
  templateUrl: './entrepreneurship-club.component.html',
  styleUrls: ['./entrepreneurship-club.component.scss']
})
export class EntrepreneurshipClubComponent implements OnInit {
  entrepreneur: any;
  p: number = 1;
  loading : boolean = false;
  heading: string = "BUSINESS VENTURE / START UP DETAIL INFO";
  pageType: string = "entrepreneurship-club";

  constructor(
    public dataService: DataService, 
    public notify: TokenInterceptor,
    public dialog: MatDialog,
    private userService: UserService
    ) { 
      this.userService.filteredData.subscribe((res: any) => {
        this.loading = true;
        setTimeout(() => {
          this.entrepreneur = res?.data;
        }, 1000);
        this.loading = false;
      });
    }

  ngOnInit(): void {
    this.loading = true;
    this.getAllEntrepreneurship();
  }

  async getAllEntrepreneurship() {
    let action: string = 'all-entrepreneur';
    await this.dataService.getData(action).subscribe((res: any) => {
      if (res?.status == 200) {
        this.entrepreneur = res?.data;
        this.loading = false;
      }
    },(error) => {
      this.notify.notificationService.openFailureSnackBar(error);
      this.loading = false;
    });
  }

  /**
   * Function to Show detaill on dialog
   * @param params 
   */
  async onReadData(params: any) {
    const dialog = this.dialog.open(DialogEntrepreneurshipComponent, {
      width: '850px',
      data: { data: params }
    });
  }

}
