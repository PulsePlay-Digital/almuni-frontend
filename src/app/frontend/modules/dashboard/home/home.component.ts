import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { DataService } from "./../../../services/data.service";
import { Config } from "./../../../../frontend/services/config";
import { environment } from "./../../../../../environments/environment";
import { map } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/frontend/services/user.service";
import { TokenInterceptor } from "src/app/frontend/core/token.interceptor";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  gallery: any;
  featuredAlumni: any;
  alumni: any;
  homebanner: any;
  loading: boolean = false;
  imgPath = environment.imgUrl;
  allNews: any;
  allEvents: any;
  currentUser: any;
  form: FormGroup | any;
  submitted: boolean | undefined;

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
  //Home banner static data
  homeBanner = [
    { id: 1, src: "./assets/home/Banner1.webp" },
    { id: 2, src: "./assets/home/Banner2.webp" },
    { id: 3, src: "./assets/home/Banner3.webp" },
    { id: 4, src: "./assets/home/Banner4.webp" },
  ];

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
        nav: false,
      },
      400: {
        items: 1,
        stagePadding: 0,
        nav: false,
      },
      500: {
        nav: true,
      },
      768: {
        items: 1,
        nav: true,
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
        nav: true,
      },
      1191: {
        items: 1,
        nav: true,
      },
      1450: {
        items: 1,
        nav: true,
      },
    },
  };

  constructor(
    public router: Router,
    public config: Config,
    public dataService: DataService,
    public fb: FormBuilder,
    public notify: TokenInterceptor
  ) {
    this.featuredAlumni = this.config.alumniStories();
    this.currentUser = localStorage?.getItem("currentUser") || "";
  }

  ngOnInit(): void {
    this.buildForm();
    this.getAllFeaturedAlumni();
    this.getAllGallery();
    this.getAllNews();
    this.getAllEvents();
  }

  buildForm() {
    this.form = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ]
    });
  }

  get f() {
    return this.form.controls;
  }

  /**
   * Function to get all alumni
   */
  async getAllFeaturedAlumni() {
    this.loading = true;
    let action: string = "all-featured"
    await this.dataService.getData(action).subscribe((result: any) => {
      this.alumni = result?.data;
      this.loading = false;
    },
    error => {
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

  /** * Function to get all gallery  */
  async getAllGallery() {
    this.loading = true;
    let action: string = "all-gallery";
    await this.dataService.getData(action).subscribe((result: any) => {
      this.gallery = result?.data;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  }

  /** * Function to get all news */
  async getAllNews() {
    this.loading = true;
    let action: string = "all-news";
    await this.dataService.getData(action).subscribe((result: any) => {
      this.allNews = result?.data;
      this.loading = false;
    },
    error => {
      this.loading = false;
    });
  }

  /** * Function to get all alumni events */
  async getAllEvents() {
    this.loading = true;
    let action: string = "all-event";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.data.filter((item: any) => {
              return item;
          });
        })
      )
      .subscribe((result: any) => {
        this.allEvents = result;
        this.loading = false;
      }, 
      error => {
        this.loading = false;
      });
  }

  viewAlumniDetail(params: any) {
    this.router.navigate(["/celebrate/alumni-details"], {
      queryParams: { ...params }, skipLocationChange: true
    });
  }

  async subscribe() {
    this.loading = true;
    this.submitted = true;
    let action: string = "newsletter";
    if (this.form.invalid) {
      return;
    } else {
      console.log(this.form.value);
      await this.dataService.postData(action, this.form.value).subscribe((res: any) => {
        console.log(res);
        if(res?.status == 200) {
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          this.loading = false;
        }
      },
      error => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      })
    }
  }
}
