import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Config } from "../../../../services/config";
import { environment } from "../../../../../../environments/environment";
import { DataService } from "../../../../services/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TokenInterceptor } from "./../../../../core/token.interceptor";

@Component({
  selector: "app-club-details",
  templateUrl: "./club-details.component.html",
  styleUrls: ["./club-details.component.scss"],
})
export class ClubDetailsComponent implements OnInit {
  clubId: any;
  clubName: any;
  userDetail: any;
  imgPath = environment?.imgUrl;
  loading: boolean = false;
  commentForm: FormGroup | any;
  currentUser: any;
  allComment: any;
  allUser: any;
  isReply: boolean = false;
  parentId:any='';
  constructor(
    public arouter: ActivatedRoute,
    private dataService: DataService,
    public config: Config,
    private fb: FormBuilder,
    private notify: TokenInterceptor,
    private router: Router
  ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(
        localStorage?.getItem("currentUser") || ""
      );
    }
    this.arouter.queryParams.subscribe((res: any) => {
      this.clubId = res?.id;
      this.clubName = res?.name;
    });
  }

  ngOnInit(): void {
    this.buildForm();
    // this.getAllUser();
    setTimeout(() => {
      this.getAllComment();
    }, 1200);
  }
  /**
   * Function to build form data
   */
  buildForm() {
    this.commentForm = this.fb.group({
      user_id: [""],
      club_post_id: [""],
      body: ["", Validators.required],
    });
  }

  /**
   * Function to Comment post
   */
  async onClickComment() {
    let action: string = "comment";
    let params: any = {
      user_id: JSON.stringify(this.currentUser?.id),
      club_post_id: this.clubId,
      body: this.commentForm?.value?.body,
    };

    await this.dataService.postData(action, params).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.commentForm.reset();
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          // this.notify.notificationService.openSuccessAlert(res?.message);
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }

  /**
   * Function to get all comment data
   */
  async getAllComment() {
    this.loading = true;
    let action: string = "getCommentById";
    await this.dataService.getDataById(action, this.clubId).subscribe(
      (res: any) => {
        this.allComment = res?.data;
        this.loading = false;
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
        this.loading = false;
      }
    );
  }

  /**
   * Function to reply on comment
   * @param params
   */
  async reply(params: any, uniqueID: string) {
    this.isReply = true;
    var elmnt: any = document.getElementById(uniqueID); // let if use typescript
    elmnt.focus();
    elmnt.scrollIntoView(); // this will scroll elem to the top
    window.scrollTo(0, 0); // this will scroll page to the top
   this.parentId = params.id;
  }
  /**
    * Function to reply on comment
    * @param params
    */
  async replyOnComment() {
    let action: string = "comment";
    let params: any = {
      user_id: JSON.stringify(this.currentUser?.id),
      club_post_id: this.clubId,
      body: this.commentForm?.value?.body,
      parent_id:this.parentId
    };

    await this.dataService.postData(action, params).subscribe(
      (res: any) => {
        if (res?.status == 200) {
          this.commentForm.reset();
          this.getAllComment();
          this.notify.notificationService.openSuccessSnackBar(res?.message);
          // this.notify.notificationService.openSuccessAlert(res?.message);
        }
      },
      (error) => {
        this.notify.notificationService.openFailureSnackBar(error);
      }
    );
  }
  /**
    * Function like / unlike comment
    * @param params
    */
  async likeUnlikeClub(item: any) {
    let params = {
      is_liked: item?.id,
      action: 'like-comment'
    }
    await this.dataService.postClubData(params, this.currentUser?.id)
      .subscribe((res: any) => {
        this.getAllComment();
        this.notify.notificationService.openSuccessSnackBar(res?.message);
        this.loading = false;
      },
        error => {
          this.notify.notificationService.openFailureSnackBar(error);
          this.loading = false;
        })
  }

  viewProfile(item?: any) {
    this.router.navigate(["/view-profile/basic-info"], {
      queryParams: {
        id: item?.user_id,
      }
    });
  }
}
