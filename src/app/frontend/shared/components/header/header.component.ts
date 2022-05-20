import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "./../../../services/data.service";
import { AuthService } from "./../../../services/auth.service";
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  enableSticky: boolean | undefined;

  constructor(
    public router: Router,
    private authService: AuthService,
    public dataService: DataService,
    @Inject(DOCUMENT) public document: Document 
  ) {
    if (localStorage.hasOwnProperty("currentUser")) {
      this.currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
    }
  }

  ngOnInit(): void {
    //Onscroll header shrink
    fromEvent(window, 'scroll').pipe(
      throttleTime(100)
    ).subscribe((event: any) => {
      let response: any = this.document.defaultView?.scrollY;
      response > 100 ? this.enableSticky = true : this.enableSticky = false;
    }) 
  }

  /**
   * Function to logout user
   */
  logout() {
    this.authService.logout();
    location.assign("/");
  }
  /**
   * Scroll target Section
   * @param sectionId
   */
  target(sectionId: any) {
    this.dataService.scrollSection.next(sectionId);
  }  
}
