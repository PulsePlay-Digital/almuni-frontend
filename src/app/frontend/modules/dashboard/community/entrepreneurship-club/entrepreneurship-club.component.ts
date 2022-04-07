import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEntrepreneurshipComponent } from './../../../../shared/components/dialog-entrepreneurship/dialog-entrepreneurship.component';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-entrepreneurship-club',
  templateUrl: './entrepreneurship-club.component.html',
  styleUrls: ['./entrepreneurship-club.component.scss']
})
export class EntrepreneurshipClubComponent implements OnInit {
  entrepreneur: any;
  p: number = 1;

  constructor(
    public dataService: DataService, 
    public notify: TokenInterceptor,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getAllEntrepreneurship();
  }

  async getAllEntrepreneurship() {
    let action: string = 'all-entrepreneur';
    await this.dataService.getData(action).subscribe((res: any) => {
      if (res.status == 200) {
        this.entrepreneur = res?.data;
        console.log(this.entrepreneur)
      }
    },(error) => {
      this.notify.notificationService.openFailureSnackBar(error);
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
