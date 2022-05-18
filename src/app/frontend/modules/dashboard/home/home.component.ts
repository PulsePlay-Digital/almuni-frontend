import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { DataService } from "./../../../services/data.service";
import { Config } from "./../../../../frontend/services/config";
import { environment } from "./../../../../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  gallery: any;
  featuredAlumni: any;
  alumni: any;
  homebanner:any;
  loading: boolean = false;
  imgPath = environment.imgUrl;

  homebannerOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
    nav: true,
  };
   homeBanner = [{id:1, src:"./assets/home/Banner1.webp"},{id:2, src:"./assets/home/Banner2.webp"},{id:3, src:"./assets/home/Banner3.webp"},{id:4, src:"./assets/home/Banner4.webp"}] 
  
   customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
    nav: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      400: {
        items: 1,
        stagePadding: 0,
        nav: false,
      },
      500:{
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
        // stagePadding: 250
      },
      1191: {
        items: 1,
        // stagePadding: 350
      },
    },
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
    stagePadding: 200,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      400: {
        items: 1,
        stagePadding: 0,
        nav: false,
      },
      768: {
        items: 1,
        nav: false,
        // stagePadding: 250
      },
      1191: {
        items: 1,
        // stagePadding: 350
      },
    },
  };

  constructor(
    public router: Router,
    public config: Config,
    public dataService: DataService
  ) {
    // this.gallery = this.config.gallary();
    this.featuredAlumni = this.config.alumniStories();
  }

  ngOnInit(): void {
    this.loading = true;
    this.getAllFeaturedAlumni();
    this.getAllGallery();
  }
  /**
   * Function to connect user with alumni
   */
  goJoin() {
    this.router.navigate(["/login"]);
  }

  /**
   * Function to get all alumni
   */
  async getAllFeaturedAlumni() {
    let action: string = "all-featured";
    await this.dataService.getData(action).subscribe((result: any) => {
      this.alumni = result?.data;
      this.loading = false;
    });
  }
  /**
   * Function to redirect alumni details
   * @param id
   */
  viewAlunni(id: number) {
    this.router.navigate(["/celebrate/alumni-details"], {
      queryParams: { id: id, type: "featured-alumni" },
    });
  }

  /**
   * Function to get all gallery
   */
  async getAllGallery() {
    let action: string = "all-gallery";
    await this.dataService.getData(action).subscribe((result: any) => {
      this.gallery =  result?.data;
      this.loading = false;                                                                                                                                                                                                                               
    })
  }

}
