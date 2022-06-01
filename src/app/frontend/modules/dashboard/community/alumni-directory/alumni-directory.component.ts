import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { BreadcrumbService } from "xng-breadcrumb";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";

@Component({
  selector: "app-alumni-directory",
  templateUrl: "./alumni-directory.component.html",
  styleUrls: ["./alumni-directory.component.scss"],
})
export class AlumniDirectoryComponent implements OnInit {
  user: any = [];
  p: number = 1;
  loading: boolean = false;
  imgPath = environment.imgUrl;
  heading: string = "Alumni Directory";
  constructor(
    public dataService: DataService,
    private breadcrumbService: BreadcrumbService,
    public router: Router,
    public notify: TokenInterceptor
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@ChildTwo', 'alumni-directory');
    this.loading = true;
    this.getAllAlumniUser();
  }
  /**  Function to get all alumni user */
  async getAllAlumniUser() {
    let action: string = "all-users";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        this.user = res.data;
        this.loading = false;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
        setTimeout(() => {
          this.loading = false;
        }, 500);
      }
    );
  }
  /**
   * Function to navigate on view detail page
   * @param params
   */
  viewDetail(id: any) {
    this.router.navigate(["/community/alumni-details"], {
      queryParams: { id: id },
    });
  }
}
