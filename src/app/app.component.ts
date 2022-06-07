import { Component, HostListener } from "@angular/core";
import { NgcCookieConsentConfig, NgcCookieConsentService } from "ngx-cookieconsent";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sbs-almuni";
   cookieConfig:NgcCookieConsentConfig = {
    cookie: {
      domain: 'localhost'// it is recommended to set your domain, for cookies to work properly
    },
    palette: {
      popup: {
        background: '#000'
      },
      button: {
        background: '#f1d600'
      }
    },
    theme: 'edgeless',
    type: 'opt-out',
    layout: 'my-custom-layout',
    layouts: {
      "my-custom-layout": '{{messagelink}}{{compliance}}'
    },
    elements:{
      messagelink: `
      <span id="cookieconsent:desc" class="cc-message">{{message}} 
        <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>, 
        <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> and our 
        <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a>
      </span>
      `,
    },
    content:{
      message: 'By using our site, you acknowledge that you have read and understand our ',
      
      cookiePolicyLink: 'Cookie Policy',
      cookiePolicyHref: 'https://cookie.com',
   
      privacyPolicyLink: 'Privacy Policy',
      privacyPolicyHref: 'https://privacy.com',
   
      tosLink: 'Terms of Service',
      tosHref: 'https://tos.com',
    }
  };
  constructor(
    private ccService: NgcCookieConsentService
  ) {
  }
  isShow: boolean | undefined;
  positionToShow = 100;

  ngOnInit(): void {
      // Support for translated cookies messages
      // this.translateService.addLangs(['en', 'fr']);
      // this.translateService.setDefaultLang('en');
   
      // const browserLang = this.translateService.getBrowserLang();
      // this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   
      // this.translateService//
      //   .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
      //   .subscribe(data => {
   
          this.ccService.getConfig().content = this.ccService.getConfig().content || {} ;
          // Override default messages with the translated ones
          // this.ccService.getConfig().content.header = data['cookie.header'];
          // this.ccService.getConfig().content.message = data['cookie.message'];
          // this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
          // this.ccService.getConfig().content.allow = data['cookie.allow'];
          // this.ccService.getConfig().content.deny = data['cookie.deny'];
          // this.ccService.getConfig().content.link = data['cookie.link'];
          // this.ccService.getConfig().content.policy = data['cookie.policy'];
   
          this.ccService.destroy();//remove previous cookie bar (with default messages)
          this.ccService.init(this.ccService.getConfig()); // update config with translated messages
        // });
  }
  
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
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
      behavior: 'smooth' 
    });
  }
}
