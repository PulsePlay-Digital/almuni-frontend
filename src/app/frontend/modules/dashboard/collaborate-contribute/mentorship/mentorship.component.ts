import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  imgPath = environment.imgUrl

  constructor(public dataService: DataService, public router: Router) {}

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
      this.user = res.data;
      this.loading = false;
    });
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
