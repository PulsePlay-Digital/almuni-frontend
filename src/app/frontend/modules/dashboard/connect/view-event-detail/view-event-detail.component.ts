import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "src/environments/environment";
import { Config } from "./../../../../services/config";

@Component({
  selector: "app-view-event-detail",
  templateUrl: "./view-event-detail.component.html",
  styleUrls: ["./view-event-detail.component.scss"],
})
export class ViewEventDetailComponent implements OnInit {
  event_detail: any;
  heading: string= "EVENT DETAIL INFORMATION";
  imgPath = environment.imgUrl;

  constructor(public arouter: ActivatedRoute, public config: Config) {
    //Get query params
    this.arouter.queryParams.subscribe((res: any) => {
      this.event_detail = res;
    });
  }

  ngOnInit(): void {}

  /*** Function to navigate on previous page */
  back() {
    this.config.navigateBack();
  }
}
