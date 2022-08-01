import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-key-contact',
  templateUrl: './key-contact.component.html',
  styleUrls: ['./key-contact.component.scss']
})
export class KeyContactComponent implements OnInit {
  keyData: any;
  loading: boolean = false;
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) { }

  ngOnInit(): void {
    this.getAllKeyContacts();
  }

  /**
   * Get all key contacts
   */
  async getAllKeyContacts() {
    this.loading = true;
    let action: string = 'all-contact';
    await this.dataService.getData(action).pipe(
      map((res:any) => {
        return res.data.filter((item:any) => {
          if(item?.type === "KeyContact"){
            return item;
          }
        });
       })
    ).subscribe((data: any) => {
      this.keyData = data;
      this.loading = false;
    },
    error => {
      this.notify.notificationService.openFailureSnackBar(error?.message);
      this.loading = false;
    }
    )
  }
}
