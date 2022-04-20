import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getAllKeyContacts();
  }

  /**
   * Get all key contacts
   */
  async getAllKeyContacts() {
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
    })
  }
}
