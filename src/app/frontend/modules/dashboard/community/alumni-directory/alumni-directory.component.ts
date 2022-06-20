import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "./../../../../../../environments/environment";
import { BreadcrumbService } from "xng-breadcrumb";
import { TokenInterceptor } from "./../../../../core/token.interceptor";
import { DataService } from "./../../../../services/data.service";
import { UserService } from "./../../../../services/user.service";

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
  pageType: string = "alumni-directory";
  constructor(
    public dataService: DataService,
    private breadcrumbService: BreadcrumbService,
    public router: Router,
    private notify: TokenInterceptor,
    private userService: UserService
  ) {
    this.userService.filteredData.subscribe((res: any) => {
      this.loading = true;
      setTimeout(() => {
        this.user = res?.data;
      }, 1000);
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.breadcrumbService.set("@ChildTwo", "alumni-directory");
    this.getAllAlumniUser();
  }
  /**  Function to get all alumni user */
  async getAllAlumniUser() {
    this.loading = true;
    let action: string = "all-users";
    await this.dataService.getData(action).subscribe(
      (res: any) => {
        this.user = res?.data;
        this.loading = false;
      },
      (error) => {
        if (error?.status == 401) {
          this.notify.notificationService.openFailureSnackBar(
            error?.error?.message
          );
          this.router.navigate(['/login']);
        } else {
          this.notify.notificationService.openFailureSnackBar(error);
        }
        this.loading = false;
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
