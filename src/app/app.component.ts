import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "sbs-almuni";

  constructor() {
  }
  isShow: boolean | undefined;
  positionToShow = 100;

  ngOnInit(): void {
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
