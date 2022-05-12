import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-banner',
  templateUrl: './users-banner.component.html',
  styleUrls: ['./users-banner.component.scss']
})
export class UsersBannerComponent implements OnInit {
  @Input() heading: any;
  constructor() { }

  ngOnInit(): void {
  }

}
