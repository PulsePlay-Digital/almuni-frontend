import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-mentorship',
  templateUrl: './mentorship.component.html',
  styleUrls: ['./mentorship.component.scss']
})
export class MentorshipComponent implements OnInit {

  user: any = [];
  p: number = 1;

  constructor(public dataService: DataService, public router: Router) {}

  ngOnInit(): void {
    this.getAllAlumniUser();
  }
  /**
   * Function to get all alumni user
   */
  async getAllAlumniUser() {
    let action: string = "all-users";
    await this.dataService.getData(action).subscribe((res: any) => {
      this.user = res.data;
    });
  }
  /**
   * Function to navigate on view detail page
   * @param params
   */
  viewDetail(params: any) {
    this.router.navigate(["/view-profile"]);
  }
}
