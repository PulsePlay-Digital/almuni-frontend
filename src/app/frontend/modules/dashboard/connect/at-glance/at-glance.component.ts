import { Component, Input, OnInit } from "@angular/core";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { TokenInterceptor } from "src/app/frontend/core/token.interceptor";
import { DataService } from "src/app/frontend/services/data.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-at-glance",
  templateUrl: "./at-glance.component.html",
  styleUrls: ["./at-glance.component.scss"],
})
export class AtGlanceComponent implements OnInit {
  @Input() pastItems: any;
  @Input() upcomingItems: any;
  @Input() imgPath: any;

  loading: boolean = false;

  pastEvent: any;
  upcomingEvent: any;
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.pastEvent = this.pastItems;
      this.upcomingEvent = this.upcomingItems;
      this.loading = false;
    }, 500);
  }
}
