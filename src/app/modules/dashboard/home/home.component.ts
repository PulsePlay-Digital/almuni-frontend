import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Config } from './../../../services/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gallary: any;
  alumniStories: any;

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2500,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    nav: true
  }

  gallaryOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      400: {
        items: 1,
        stagePadding: 0,
      },
      768: {
        items: 1,
        stagePadding: 300,
      }
    },
  }

  constructor(public router: Router,
    public config: Config
  ) {
    this.gallary = this.config.gallary();
    this.alumniStories = this.config.alumniStories();
  }

  ngOnInit(): void {
  }

  /**
   * Function to connect user with alumni
   */
  goJoin() {
    this.router.navigate(['/auth/login']);
  }
}
