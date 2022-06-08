import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/frontend/services/auth.service";
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
    private notify: TokenInterceptor,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.breadcrumbService.set("@ChildTwo", "alumni-directory");
    this.loading = true;
    this.getAllAlumniUser();
  }
  /**  Function to get all alumni user */
  async getAllAlumniUser() {
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
