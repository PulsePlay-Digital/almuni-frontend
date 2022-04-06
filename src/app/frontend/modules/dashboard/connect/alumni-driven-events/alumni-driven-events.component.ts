import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-alumni-driven-events",
  templateUrl: "./alumni-driven-events.component.html",
  styleUrls: ["./alumni-driven-events.component.scss"],
})
export class AlumniDrivenEventsComponent implements OnInit {
  @Input() pastItems: any;
  @Input() upcomingItems: any;
  @Input() imgPath: any;

  loading: boolean = false;

  pastEvent: any;
  upcomingEvent: any;
  eventCategory: string = "alumniDrivenEvent";

  constructor() {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.pastEvent = this.pastItems;
      this.upcomingEvent = this.upcomingItems;
      this.loading = false;
    }, 500);
  }
}
