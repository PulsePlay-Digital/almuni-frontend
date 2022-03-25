import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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

  constructor(public formBuilder: FormBuilder, public userService: UserService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm () {
    this.uploadImgForm = this.formBuilder.group({
      id: [4],
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
    }
  }

  async submit() {
    // console.log(this.uploadImgForm.value)
    let action = 'profile-pic';
    let formData = new FormData;

    formData.append('id', this.uploadImgForm.value.id);
    formData.append('profile_pic', (this.profilePic) ? this.profilePic : '');

    await this.userService.postData(action, formData).subscribe((res: any) => {
      console.log(res)
    });
  }
}
