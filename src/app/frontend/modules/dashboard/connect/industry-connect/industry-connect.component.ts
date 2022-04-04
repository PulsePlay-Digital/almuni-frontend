import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry-connect',
  templateUrl: './industry-connect.component.html',
  styleUrls: ['./industry-connect.component.scss']
})
export class IndustryConnectComponent implements OnInit {

  @Input() pastItems: any;
  @Input() upcomingItems: any;
  @Input() imgPath: any;

  loading: boolean = false;

  pastEvent: any;
  upcomingEvent: any;
  constructor( ) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.pastEvent = this.pastItems;
      this.upcomingEvent = this.upcomingItems;
      this.loading = false;
    }, 500);
  }
}
