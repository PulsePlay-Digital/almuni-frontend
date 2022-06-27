import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from '../../../../services/config';
import { environment } from '../../../../../../environments/environment';
import { DataService } from '../../../../services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    public dataService: DataService, public config: Config, private fb: FormBuilder) {
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
  }

  buildForm() {
    this.commentForm = this.fb.group({
      user_id:[''],
      club_post_id: [''],
      body: ['']
    })
  }

  /**
   * Function to redirect previous page
   */
  back() {
    this.config.navigateBack();
  }

  async onClickComment() {
    console.log(this.commentForm.value);
    let action: string = "comment";
    let params: any = {
      user_id: JSON.stringify(this.currentUser?.id),
      club_post_id: this.clubId,
      body: this.commentForm.value.body
    }
    await this.dataService.postData(action, params).subscribe((res: any) => {
      console.log(res);
    });
  }
}
