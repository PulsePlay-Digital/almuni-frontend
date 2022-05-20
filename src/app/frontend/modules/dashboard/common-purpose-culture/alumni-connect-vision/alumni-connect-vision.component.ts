import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-alumni-connect-vision",
  templateUrl: "./alumni-connect-vision.component.html",
  styleUrls: ["./alumni-connect-vision.component.scss"],
})
export class AlumniConnectVisionComponent implements OnInit {
  heading: string =
    "THE FOUNDER & CHANCELLOR – LATE PROF. DR. (COL.) A. BALASUBRAMANIAN MESSAGE ON THE SRI BALAJI UNIVERSITY, PUNE : ALUMNI CONNECT VISION";

  constructor(
    public scroller: ViewportScroller,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.scrollSection.subscribe((res: any) => {
      if (res) {
        this.scrollById(res);
      }
    });
  }

  /**
   * Function to scroll by Id
   * @param params
   */
  scrollById(params: any) {
    let target = document.getElementById(params) as HTMLInputElement;
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
