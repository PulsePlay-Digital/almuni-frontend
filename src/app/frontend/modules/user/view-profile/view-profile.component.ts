import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DataService } from "./../../../services/data.service";
import { ActivatedRoute } from "@angular/router";
import { environment } from "./../../../../../environments/environment";
import { TokenInterceptor } from "./../../../core/token.interceptor";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.component.html",
  styleUrls: ["./view-profile.component.scss"],
})
export class ViewProfileComponent implements OnInit {
  profileForm: FormGroup | any;
  profilePic: any;
  image: any = "";
  submitted: boolean | undefined;
  currentUser: any;
  action: any;
  imgPath = environment.imgUrl;
  profileData: any;
  userId:any;
  constructor(
    public dataService: DataService,
    public fb: FormBuilder,
    private notify: TokenInterceptor,
    private arouter: ActivatedRoute
  ) {
    if (localStorage) {
      this.currentUser = JSON?.parse(
        localStorage?.getItem("currentUser") || ""
      );
    }
    this.arouter.queryParams.subscribe((res: any) => {
      console.log(res)
      this.userId = res.id;
    });
  }

  ngOnInit(): void {
    this.buildForm();
    this.getAllProfileData();
  }

  buildForm() {
    this.profileForm = this.fb.group({
      profile_pic: [""],
    });
  }

  async onUploadImage(event: any) {
    this.profilePic = event.target.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.profilePic = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      };
      this.action = {
        action: "profile-pic",
        id: parseInt(this.currentUser?.id),
      };

      let formData = new FormData();
      formData.append("profile_pic", this.profilePic ? this.profilePic : "");
      await this.dataService.updateData(this.action, formData).subscribe(
        (res: any) => {
          if (res.status === 200) {
            this.notify.notificationService.openSuccessSnackBar(res?.message);
            this.getCurrentUser();
            location.reload();
          }
        },
        (error) => {
          this.notify.notificationService.openFailureSnackBar(error);
        }
      );
    }
  }

  async getCurrentUser() {
    let action: string = "find-user";
    await this.dataService
      .getDataById(action, (this.userId) ? this.userId : this.currentUser?.id)
      .subscribe((res: any) => {
        localStorage.setItem("currentUser", JSON.stringify(res?.data));
      });
  }

  async getAllProfileData() {
    let action: string = "all-profileUsers";
    await this.dataService
      .getDataById(action, (this.userId) ? this.userId : this.currentUser?.id)
      .subscribe((res: any) => {
        this.profileData = res;
      });
  }
}
