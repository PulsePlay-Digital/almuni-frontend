import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OwlOptions } from "ngx-owl-carousel-o";
import { DataService } from "./../../../services/data.service";
import { Config } from "./../../../../frontend/services/config";
import { environment } from "./../../../../../environments/environment";
import { map } from "rxjs/operators";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenInterceptor } from "./../../../core/token.interceptor";
import * as moment from "moment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  gallery: any;
  homeBanner: any;
  alumni: any;
  loading: boolean = false;
  imgPath = environment?.imgUrl;
  allNews: any;
  allEvents: any;
  currentUser: any;
  form: FormGroup | any;
  submitted: boolean | undefined;
  locationCounts: any;

  homebannerOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 2000,
    autoplay: true,
    autoplayTimeout: 3000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
    nav: true,
  };

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1500,
    autoplay: true,
    autoplayTimeout: 4000,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
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
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,
    navText: [
      '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    ],
    nav: true,
    center: true,
    stagePadding: 150,
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
      },
      1191: {
        items: 1,
      },
      1450: {
        items: 1,
      },
    },
  };
  lazyLoadImage = "./assets/loading.gif";
  successAlert: boolean | undefined;
  warningAlert: boolean | undefined;
  showAlert: any;
  upcomingEvent: any;
  
  constructor(
    public router: Router,
    public config: Config,
    public dataService: DataService,
    public fb: FormBuilder,
    public notify: TokenInterceptor
  ) {
    this.currentUser = localStorage?.getItem("currentUser") || "";
  }

  ngOnInit(): void {
    this.buildForm();
    this.getBanner();
    this.getAllFeaturedAlumni();
    this.getAllGallery();
    this.getAllNews();
    this.getAllEvents();
    this.getLocations();
  }

  buildForm() {
    this.form = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
    });
  }

  get f() {
    return this.form.controls;
  }
  async getBanner() {
    this.loading = true;
    let action: string = "all-gallery";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res?.data?.filter((item: any) => {
            if (item?.type == "Home main banner") {
              return item;
            }
          });
        })
      )
      .subscribe((result: any) => {
        this.homeBanner = result;
      });
  }

  /**
   * Function to get all alumni
   */
  async getAllFeaturedAlumni() {
    this.loading = true;
    let action: string = "all-featured";
    await this.dataService.getData(action).subscribe(
      (result: any) => {
        this.alumni = result?.data;
        this.loading = false;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      }
    );
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
    await this.dataService.getData(action).subscribe(
      (result: any) => {
        this.gallery = result?.data;
        this.loading = false;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      }
    );
  }

  /** * Function to get all news */
  async getAllNews() {
    this.loading = true;
    let action: string = "all-news";
    await this.dataService.getData(action).subscribe(
      (result: any) => {
        this.allNews = result?.data;
        this.loading = false;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      }
    );
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
      .subscribe(
        (result: any) => {
          this.allEvents = result;
          result?.filter((res: any) => {
            let commingDate = res?.date;
            let currentDate = moment(moment.now()).format("YYYY-MM-DD");
            if (moment(currentDate).isSameOrBefore(commingDate) == true) {
              this.upcomingEvent = res;
            }
          })
          this.loading = false;
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        }
      );
  }
  /**
   * Function to navigate on Alumni detail page
   * @param params
   */
  viewAlumniDetail(params: any) {
    this.router.navigate(["/celebrate/alumni-details"], {
      queryParams: { ...params, type: "featured-alumni" },
    });
  }

  /**
   * Function to subscribe on newsletter
   * @returns
   */
  async subscribe() {
    this.submitted = true;
    let action: string = "newsletter";
    if (this.form.invalid) {
      return;
    } else {
      await this.dataService.postData(action, this.form.value).subscribe(
        (res: any) => {
          if (res?.status == 200) {
            this.successAlert = true;
            this.showAlert = res?.message;
            setTimeout(() => {
              this.successAlert = false
            }, 2500);
          } else if (res?.status == 201) {
            this.warningAlert = true;
            this.showAlert = res?.message;
            setTimeout(() => {
              this.warningAlert = false
            }, 2500);
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        }
      );
    }
  }

  /**
   * Function to get location
   */
  async getLocations() {
    let action: string = "count-region";
    await this.dataService
      .getLocaltionData(action)
      .pipe(
        map((res: any) => {
          return res;
        })
      )
      .subscribe((result: any) => {
        this.locationCounts = result;
      });
  }

  navigate(r: string) {
    this.currentUser
      ? this.router.navigate([r])
      : this.router.navigate(["/login"]);
  }

  viewEventDetail(params: any) {
    this.router.navigate((this.currentUser) ? ['/connect/event-detail'] : ['/login'], {
      queryParams: params, skipLocationChange: true
    });
  }
  /**
   * Function to navigate on detail page
   * @param url 
   * @param params 
   */
  navigateToDetail(url: string, params: any) {
    this.router.navigate([url], { queryParams:  params, skipLocationChange: true })
  }
}
