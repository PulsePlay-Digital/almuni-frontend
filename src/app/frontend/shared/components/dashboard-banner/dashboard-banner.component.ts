import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-banner',
  templateUrl: './dashboard-banner.component.html',
  styleUrls: ['./dashboard-banner.component.scss']
})
export class DashboardBannerComponent implements OnInit {

  @Input() heading: any;
  constructor() { }

  ngOnInit(): void {
  }

}
