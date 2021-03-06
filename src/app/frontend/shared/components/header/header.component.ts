import { Component, ElementRef, EventEmitter, Inject, OnInit, Output, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "./../../../services/data.service";
import { AuthService } from "./../../../services/auth.service";
import { fromEvent } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarNav', { static: false }) navbarNav: ElementRef | undefined;
  currentUser: any;
  enableSticky: boolean | undefined;
  sidePanel: any;
  showFiller = false;
  imgPath = environment.imgUrl;
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
    fromEvent(window, "scroll").subscribe((event: any) => {
      let response: any = this.document.defaultView?.scrollY;
      response > 100 ? (this.enableSticky = true) : (this.enableSticky = false);
    });
  }

  /*** Logout */
  logout() {
    this.authService.logout();
    location.assign("/home");
  }

  /**
   * Scroll target Section
   * @param sectionId
   */
  target(sectionId: any) {
    this.dataService.scrollSection.next(sectionId);
  }

  openNav() {
    this.sidePanel = document.getElementById("mySidepanel") as HTMLElement;
    this.sidePanel.style.width = "74%";
  }

  closeNav() {
    this.sidePanel = document.getElementById("mySidepanel") as HTMLElement;
    this.sidePanel.style.width = "0";
  }

  navigate(r: string) {
    if (r == 'past' || r == 'upcomming') {
      this.router.navigate([ '/connect/at-glance' ], { queryParams: { tab: r}, skipLocationChange: true  });
    } else {
      this.currentUser ? this.router.navigate([r]) : this.router.navigate(['/login']);
    }
  }

  editProfile() {
    this.router.navigate(['/edit-profile'], { queryParams: { key: 'test' } });
  }
}

// this.router.navigate(["/community/alumni-details"], {
//   queryParams: { id: id },