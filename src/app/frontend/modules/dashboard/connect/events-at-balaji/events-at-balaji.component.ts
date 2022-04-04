import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-at-balaji',
  templateUrl: './events-at-balaji.component.html',
  styleUrls: ['./events-at-balaji.component.scss']
})
export class EventsAtBalajiComponent implements OnInit {

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
