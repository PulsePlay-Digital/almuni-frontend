import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-alumni-details',
  templateUrl: './alumni-details.component.html',
  styleUrls: ['./alumni-details.component.scss']
})
export class AlumniDetailsComponent implements OnInit { 
  alumniId: any;
  constructor(public arouter: ActivatedRoute, public dataService: DataService) {
    this.arouter.queryParams.subscribe((res: any) => {
      console.log(res)
      this.alumniId = res.id;
      console.log(this.alumniId)
    })
   }

  ngOnInit(): void {
    setTimeout(() => {
      this.getSingleUser();
    }, 500);
  }

  async getSingleUser() {
    let action: string = "single-user";
    await this.dataService.getDataById(action, this.alumniId).subscribe((res: any) => {
      console.log(res)
    })
  }
}
