import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import * as moment from "moment";
import { CountryService } from "./../../../services/country.service";
import { DataService } from "./../../../services/data.service";
import { AuthService } from "./../../../services/auth.service";
import { UserService } from "./../../../services/user.service";
import { Config } from "./../../../services/config";
import { ActivatedRoute } from "@angular/router";
import { environment } from "./../../../../../environments/environment";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.component.html",
  styleUrls: ["./view-profile.component.scss"],
})
export class ViewProfileComponent implements OnInit {
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
    private authService: AuthService,
    public userService: UserService,
    public countryService: CountryService,
    public dataService: DataService,
    public config: Config,
    public arouter: ActivatedRoute
  ) {
    // Get Queryparams
    this.arouter.queryParams.subscribe((res: any) => {
      if (res?.type == 'featuredAlumni') {
        this.user = res;
      }
      this.userId = res?.id;
    });
    this.token = this.authService.getToken();
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
}
