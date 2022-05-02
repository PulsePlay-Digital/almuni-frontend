import { Component, OnInit } from "@angular/core";
import { Config } from "./../../../../services/config";

@Component({
  selector: "app-magazine",
  templateUrl: "./magazine.component.html",
  styleUrls: ["./magazine.component.scss"],
})
export class MagazineComponent implements OnInit {
  constructor(public config: Config) {}

  ngOnInit(): void {}

  back() {
    this.config.navigateBack();
  }
}
