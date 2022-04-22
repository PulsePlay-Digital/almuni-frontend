import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { environment } from "./../../../../../environments/environment";
import { UserService } from "./../../../services/user.service";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit {
  uploadImgForm: FormGroup | any;
  profilePic: any;
  image: any;
  currentUser: any;
  imgUrl: any;

  constructor(
    public formBuilder: FormBuilder, 
    public userService: UserService
    ) {
      let data : any =  localStorage?.getItem("currentUser")
      this.currentUser = JSON.parse(data);
      this.imgUrl = environment.imgUrl;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm () {
    this.uploadImgForm = this.formBuilder.group({
      id: [''],
      profile_pic: ['']
    })
  }

  /**
   * Function to upload Image
   * @param event 
   */
  onUploadImage(event: any) {
    this.profilePic = event.target.files[0];
    if (event?.target?.files && event?.target?.files[0]) {
      this.profilePic = event?.target?.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event) => {
        this.image = _event.target?.result;
      }
      setTimeout(() => {
        this.submit()
      }, 500);
    }
  }

  async submit() {
    console.log(this.uploadImgForm.value)
    let action = {
      id: this.currentUser.id,
      action: 'profile-pic'
    };
    let formData = new FormData;

    formData.append('id', this.currentUser.id);
    formData.append('profile_pic', (this.profilePic) ? this.profilePic : '');

    await this.userService.postData(action, formData).subscribe((res: any) => {
      console.log(res)
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      this.image = res.data.profile_pic;
    });
  }
}
