import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { TokenInterceptor } from 'src/app/frontend/core/token.interceptor';
import { DataService } from './../../../../services/data.service';

@Component({
  selector: 'app-alumni-passion',
  templateUrl: './alumni-passion.component.html',
  styleUrls: ['./alumni-passion.component.scss']
})
export class AlumniPassionComponent implements OnInit {
  isPassion: boolean = false;
  isShared: boolean = true;
  passionByMe: boolean = false;
  title: string =  'Post a Passion';
  heading: string = "My Passion";
  type: string = 'passion';
  alumniData: any;
  allPassionCount: number | undefined;
  allUserPassionCount: any;
  currentUser: any;

  constructor(
    private dataService: DataService,
    private notify: TokenInterceptor
  ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
    }
   }

  ngOnInit(): void {
    this.getAllPassion();
    this.countAllUserPassion();
  }

  addPassion() {
    this.isPassion = true;
    this.isShared = false;
    this.passionByMe = false;
  }

  seeAllPassion() {
    this.isShared = true;
    this.isPassion = false;
    this.passionByMe = false;
  }

  viewPassionByMe() {
    this.isShared = false;
    this.isPassion = false;
    this.passionByMe = true;
  }

  async getAllPassion() {
    let action: string = "all-journey";
    await this.dataService
      .getData(action)
      .pipe(
        map((res: any) => {
          return res.Journey.filter((item: any) => {
            return item?.type == "passion";
          });
        })
      )
      .subscribe((result: any) => {
        this.allPassionCount = result?.length;
        this.alumniData = result;
      });
  }

  async countAllUserPassion() {
    let action: string = "count-userPassion";
    await this.dataService.getDataById(action, this.currentUser?.id).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.allUserPassionCount = res?.data;
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

}
