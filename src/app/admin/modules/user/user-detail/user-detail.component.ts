import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"],
})
export class UserDetailComponent implements OnInit {
  detail: any;
  constructor(public aroute: ActivatedRoute, private _location: Location) {
    const params: any = this.aroute.snapshot.queryParams;
    this.detail = params["user"];
  }

  ngOnInit(): void {}

  /**
   * Navigate to Previous Page
   */
  navigateBack() {
    this._location.back();
  }
}
