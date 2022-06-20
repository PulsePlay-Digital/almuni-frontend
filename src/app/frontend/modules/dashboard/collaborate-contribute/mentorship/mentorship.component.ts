import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenInterceptor } from './../../../../core/token.interceptor';
import { UserService } from './../../../../services/user.service';
import { environment } from './../../../../../../environments/environment';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.scss']
})
export class MentorshipComponent implements OnInit {

  user: any = [];
  p: number = 1;
  loading: boolean = false;
  imgPath = environment.imgUrl;
  heading: string = "MENTORSHIP";
  pageType: string = "mentorship";

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private router: Router,
    private notify: TokenInterceptor) {
      this.userService.filteredData.subscribe((res: any) => {
        this.loading = true;
        setTimeout(() => {
          this.user = res?.data;
        }, 1000);
        this.loading = false;
      });
    }

  ngOnInit(): void {
    this.loading = true;
    this.getAllAlumniUser();
  }
  /**
   * Function to get all alumni user
   */
  async getAllAlumniUser() {
    let action: string = "all-users";
    await this.dataService.getData(action).subscribe((res: any) => {
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
  viewDetail(params: number) {
    this.router.navigate(["/collaborate-contribute/view-details"], {
      queryParams: { id: params }
    });
  }
}
