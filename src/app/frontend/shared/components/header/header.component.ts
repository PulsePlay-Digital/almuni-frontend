import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "./../../../services/data.service";
import { AuthService } from "./../../../services/auth.service";
import { fromEvent } from "rxjs";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  enableSticky: boolean | undefined;
  sidePanel: any;
  showFiller = false;
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
    location.assign("/");
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

  navigate(r:string) {
    this.currentUser ? this.router.navigate([r]) : this.router.navigate(['/login']); 
  }
}