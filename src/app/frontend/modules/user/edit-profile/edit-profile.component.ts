import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Config } from "./../../../services/config";
import { CountryService } from "./../../../services/country.service";
import { DataService } from "./../../../services/data.service";
import { UserService } from "./../../../services/user.service";
import { environment } from "./../../../../../environments/environment";
import { TokenInterceptor } from "./../../../core/token.interceptor";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit {
  form: FormGroup | any;
  token: any;
  user: any;
  countries: any;
  getBatch: any;
  getInstitutes: any;
  heading: string = "GENERAL INFORMATION";
  gender: any;
  userId: any;
  loading: boolean = false;
  profilePic: any;
  image: any;
  imgPath = environment.imgUrl;
  constructor(
    public fb: FormBuilder,
    public userService: UserService,
    public countryService: CountryService,
    public dataService: DataService,
    public config: Config,
    public arouter: ActivatedRoute,
    public notify: TokenInterceptor
  ) {
    // Get query params
    this.arouter.queryParams.subscribe((res: any) => {
      if (res) {
        this.userId = res?.id;
      }
    });
    // Get all gender 
    this.gender = this.config.genderDt();
  }

  async ngOnInit() {
    this.buildForm();
    this.loadCountries();
    this.getAllBatches();
    this.getAllInstitutes();
    if (this.userId !== null) {
      this.loading = true;
      let action: string = "find-user";
      await this.userService
        .getUsersById(action, this.userId)
        .subscribe((res: any) => {
          this.user = res?.data;
          this.form.patchValue({
            ...this.user
          });
          this.loading = false;
        });
    }
  }

  /**
   * Build form data
   */
  buildForm() {
    this.form = this.fb.group({
      profile_pic: [""],
      first_name: [""],
      last_name: [""],
      institute_name: [""],
      institute_roll_no: [""],
      batch: [""],
      gender: [""],
      office_email: [""],
      current_address: [""],
      country: [""],
      current_region: [""],
      current_state: [""],
      city: [""],
      permanent_address: [""],
      permanent_country: [""],
      linkedin_id: [""],
      twitter_id: [""],
      skype_id: [""],
      facebook_id: [""],
      instagram_id: [""],
      council_member_designation: [""],
    });
  }

  /**
   * Function to upload image
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
      };
    }
  }
  /**
   * Function to get all countries
   */
  public loadCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }
  /**
   * Function to get all Batches
   */
  async getAllBatches() {
    await this.dataService.getAllBatches().subscribe(
      (res: any) => {
        this.getBatch = res.BatchYear;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  /**
   * Function to get all institutes
   */
  async getAllInstitutes() {
    await this.dataService.getAllInstitutes().subscribe(
      (res: any) => {
        this.getInstitutes = res.Institute;
      },
      (error) => {
        console.log(error);
      }
    );
  }

 async editUser() {
    if (this.form.invalid) {
      return;
    } else {
      let formData = new FormData();
      formData.append("profile_pic", this.profilePic ? this.profilePic : "");
      formData.append("first_name", this.form.value.first_name);
      formData.append("last_name", this.form.value.last_name);
      formData.append("institute_name", this.form.value.institute_name);
      formData.append("institute_roll_no", this.form.value.institute_roll_no);
      formData.append("batch", this.form.value.batch);
      formData.append("gender", this.form.value.gender);
      formData.append("office_email", this.form.value.office_email);
      formData.append("current_address", this.form.value.current_address);
      formData.append("country", this.form.value.country);
      formData.append("current_region", this.form.value.current_region);
      formData.append("current_state", this.form.value.current_state);
      formData.append("city", this.form.value.city);
      formData.append("permanent_address", this.form.value.permanent_address);
      formData.append("permanent_country", this.form.value.permanent_country);
      formData.append("linkedin_id", this.form.value.linkedin_id);
      formData.append("twitter_id", this.form.value.twitter_id);
      formData.append("skype_id", this.form.value.skype_id);
      formData.append("facebook_id", this.form.value.facebook_id);
      formData.append("instagram_id", this.form.value.instagram_id);
      formData.append(
        "council_member_designation",
        this.form.value.council_member_designation
      );
      let action = {
        action : "update-user",
        id: this.user?.id
      }
      await this.dataService.updateData(action, formData).subscribe((res: any) => {
        if(res.status == 200) {
          location.reload();
          this.notify.notificationService.openSuccessSnackBar(res.message);
        }
      }, error => {
        this.notify.notificationService.openFailureSnackBar(error);
      })
    }
  }
}
