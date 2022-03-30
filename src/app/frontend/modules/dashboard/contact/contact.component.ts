import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  keyData: any;
  socialData: any;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.getAllKeyContacts();
    this.getAllSocialLinks();
  }
/**
 * Get All Key Contacts
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
    })
  }
  
  async getAllSocialLinks() {
    let action: string = 'all-contact';
    await this.dataService.getData(action).pipe(
      map((res:any) => {
        return res.data.filter((item:any) => {
          if(item?.type === "SbupChannel"){
            return item;
          }
        });
       })
    ).subscribe((data: any) => {
      this.socialData = data;
    })
  }
}
