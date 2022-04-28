import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-event-detail',
  templateUrl: './view-event-detail.component.html',
  styleUrls: ['./view-event-detail.component.scss']
})
export class ViewEventDetailComponent implements OnInit {
  event_detail: any;

  constructor(
    public arouter: ActivatedRoute,
    public location: Location
  ) {
    this.arouter.queryParams.subscribe((res: any) => {
      console.log(res)
      this.event_detail = res; 
    })
   }

  ngOnInit(): void {
   
  }

  navigateBack () {
    this.location.back();
  }
}
