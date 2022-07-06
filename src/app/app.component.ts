import { Component, HostListener } from "@angular/core";
import {
  NgcCookieConsentConfig,
  NgcCookieConsentService,
} from "ngx-cookieconsent";
import { TokenInterceptor } from "./frontend/core/token.interceptor";
import { DataService } from "./frontend/services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sbs-almuni";
  constructor(
    private ccService: NgcCookieConsentService,
    private dataService: DataService,
    private notify: TokenInterceptor
  ) {}
  isShow: boolean | undefined;
  positionToShow = 100;

  async ngOnInit() {
    // Support for translated cookies messages
    // this.translateService.addLangs(['en', 'fr']);
    // this.translateService.setDefaultLang('en');

    // const browserLang = this.translateService.getBrowserLang();
    // this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    // this.translateService//
    //   .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
    //   .subscribe(data => {

    // this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
    // Override default messages with the translated ones
    // this.ccService.getConfig().content.header = data['cookie.header'];
    // this.ccService.getConfig().content.message = data['cookie.message'];
    // this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
    // this.ccService.getConfig().content.allow = data['cookie.allow'];
    // this.ccService.getConfig().content.deny = data['cookie.deny'];
    // this.ccService.getConfig().content.link = data['cookie.link'];
    // this.ccService.getConfig().content.policy = data['cookie.policy'];

    this.ccService.destroy(); //remove previous cookie bar (with default messages)
    this.ccService.init(this.ccService.getConfig()); // update config with translated messages
    // });
    let action: string = "create-visitor";
    await this.dataService.getData(action).subscribe((count: any) => {}, error => {
      this.notify.notificationService.openFailureSnackBar(error);
    });
  }

  @HostListener("window:scroll")
  checkScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition >= this.positionToShow) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  /**
   * Function to scroll to top
   */
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
}
