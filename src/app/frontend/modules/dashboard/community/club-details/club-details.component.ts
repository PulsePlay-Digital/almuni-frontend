import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../../../services/config';
import { environment } from '../../../../../../environments/environment';
import { DataService } from '../../../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenInterceptor } from 'src/app/frontend/core/token.interceptor';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss']
})
export class ClubDetailsComponent implements OnInit { 
  clubId: any;
  clubName:any;
  userDetail: any;
  imgPath = environment?.imgUrl;
  loading: boolean = false;
  commentForm: FormGroup | any;
  currentUser: any;

  constructor(public arouter: ActivatedRoute, 
    private dataService: DataService,
    public config: Config,
    private fb: FormBuilder,
    private notify: TokenInterceptor) {
      if (localStorage) {
        this.currentUser = JSON?.parse(localStorage?.getItem('currentUser') || '');
      }
    this.arouter.queryParams.subscribe((res: any) => {
      this.clubId = res?.id;
      this.clubName = res?.name;
    })
   }

  ngOnInit(): void {
    // this.loading = true;
    this.buildForm();
    this.getAllComment();
  }
/**
 * Function to build form data
 */
  buildForm() {
    this.commentForm = this.fb.group({
      user_id:[''],
      club_post_id: [''],
      body: ['']
    })
  }

  /**
   * Function to Comment post
   */
  async onClickComment() {
    console.log(this.commentForm.value);

    let action: string = "comment";
    let params: any = {
      user_id: JSON.stringify(this.currentUser?.id),
      club_post_id: this.clubId,
      body: this.commentForm?.value?.body
    }
   
    await this.dataService.postData(action, params).subscribe((res: any) => {
      console.log(res);
      if(res?.status == 200) {
        // this.notify.notificationService.openSuccessSnackBar(res?.message);
        this.notify.notificationService.openSuccessAlert(res?.message);
      }
    },
    error => {
      this.notify.notificationService.openFailureSnackBar(error);
    });
  }

  /**
   * Function to get all comment data
   */
  async getAllComment() {
   let action: string = "all-clubPost";
    await this.dataService.getData(action).subscribe((res: any) => {
      console.log(res)
    })
  }
}
