import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-startup-corner",
  templateUrl: "./startup-corner.component.html",
  styleUrls: ["./startup-corner.component.scss"],
})
export class StartupCornerComponent implements OnInit {
  heading: string = "START-UP CORNER";
  constructor() {}

  ngOnInit(): void {}
}
