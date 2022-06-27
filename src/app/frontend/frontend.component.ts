import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-frontend",
  templateUrl: "./frontend.component.html",
  styleUrls: ["./frontend.component.scss"],
})
export class FrontendComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onReloadTop(event: any) {
    window.scroll(0, 0);
  }
}
