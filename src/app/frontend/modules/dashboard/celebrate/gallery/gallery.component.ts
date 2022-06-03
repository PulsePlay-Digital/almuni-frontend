import { Component, OnInit } from "@angular/core";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent implements OnInit {
  heading: string = "CLASS WISE PICTURE";
  loading:boolean = false;
  allGallery: any;
  constructor(
    public dataService: DataService,
    public notify: TokenInterceptor
  ) {}

  ngOnInit(): void {
    this.getAllGallery();
  }

  async getAllGallery() {
    this.loading = true;
    let  action: string = 'all-gallery';
    await this.dataService.getData(action).subscribe((res: any) => {
      this.allGallery = res.data;
      this.loading = false;
    }, error => {
      this.notify.notificationService.openFailureSnackBar(error);
      this.loading = false;
    })
  }
}
