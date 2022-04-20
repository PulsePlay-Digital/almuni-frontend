import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { DataService } from './../../../../services/data.service';

@Component({
  selector: "app-social-links",
  templateUrl: "./social-links.component.html",
  styleUrls: ["./social-links.component.scss"],
})
export class SocialLinksComponent implements OnInit {
  loading: boolean = false;
  socialData: any;
  constructor(
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getAllSocialLinks();
  }

  /**
   * Get all social links 
   */
  async getAllSocialLinks() {
    let action: string = "all-contact";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.data.filter((item: any) => {
            if (item?.type === "SbupChannel") {
              return item;
            }
          });
        })
      )
      .subscribe((data: any) => {
        this.socialData = data;
        this.loading = false;
      });
  }
}
