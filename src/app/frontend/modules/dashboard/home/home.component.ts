import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Config } from "./../../../../frontend/services/config";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  gallery: any;
  alumniStories: any;

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    // autoplay: true,
    // autoplayTimeout: 3000,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
    nav: true,
  };

  galleryOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2500,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
    nav: true,
    center: true,
    stagePadding: 300,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0
      },
      400: {
        items: 1,
        stagePadding: 0
      },
      768: {
        items: 1,
        stagePadding: 250
      },
      1191: {
        items: 1,
        stagePadding: 350
      }
    }
  };

  constructor(public router: Router, public config: Config) {
    this.gallery = this.config.gallary();
    this.alumniStories = this.config.alumniStories();
  }

  ngOnInit(): void {}
  /**
   * Function to connect user with alumni
   */
  goJoin() {
    this.router.navigate(["/login"]);
  }
}
