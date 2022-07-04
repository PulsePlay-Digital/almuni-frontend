import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TokenInterceptor } from "src/app/frontend/core/token.interceptor";
import { AuthService } from "./../../../../frontend/services/auth.service";
import { Config } from "./../../../../frontend/services/config";
import { CountryService } from "./../../../../frontend/services/country.service";
import { DataService } from "./../../../../frontend/services/data.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  countries: any;
  getBatch: any;
  questions: any;
  getInstitutes: any;
  submitted: boolean = false;
  siteKey = "6LcX9pEdAAAAAOKoswl3Wl3bV6sGBeuk7SdGRkQt";
  profilePic: any;
  image: any;
  userRole: any;
  bannerHeaading: string = "new alumni registration";
  region: any;

  constructor(
    public fb: FormBuilder,
    public countryService: CountryService,
    public dataService: DataService,
    public authService: AuthService,
    public notify: TokenInterceptor,
    private config: Config,
    public router: Router
  ) {
    this.userRole = this.config?.role;
    this.region = this.config?.region;
  }

  ngOnInit(): void {
    this.buildForm();
    this.loadCountries();
    this.getAllBatches();
    this.getAllInstitutes();
    this.getAllQuestions();
  }

  buildForm() {
    this.registerForm = this.fb.group(
      {
        first_name: ["", Validators.required],
        last_name: ["", Validators.required],
        institute_id: ["", Validators.required],
        batchYear_id: ["", Validators.required],
        city: ["", Validators.required],
        current_region: ["", Validators.required],
        country: ["", Validators.required],
        code: ["", Validators.required],
        mobile_number: ["", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
        birth_date: ["", Validators.required],
        email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],
        current_company: ["", Validators.required],
        current_designation: ["", Validators.required],
        password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        password_confirmation: ["", Validators.required],
        securityQuestions_id: ["", Validators.required],
        security_answers: ["", Validators.required],
        profile_pic: [""],
        address: [""],
        status: ['unapproved'],
        role: ["0"]
        // recaptcha: [""]
      },
      {
        validators: this.passwordMatch("password", "password_confirmation"),
      }
    );
  }

  /**
   * Get all form controls
   */
  get f() {
    return this.registerForm.controls;
  }

  /**
   * Function to get all Countries
   */
  public loadCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
    });
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

  /**
   * Function to change country code on click
   * @param event
   */
  public changeCountry(event: any) {
    this.countries.filter((res: any) => {
      if (res.name == event.target.value) {
        this.registerForm.controls["code"].setValue(res.code);
      }
    });
  }

  /**
   * Function to match password and confirm password
   * @param passwordKey
   * @param confirmPasswordKey
   * @returns
   */
  passwordMatch(passwordKey: string, confirmPasswordKey: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[passwordKey];
      const matchingControl = formGroup.controls[confirmPasswordKey];
      if (matchingControl.errors && !matchingControl.errors.MustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
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
      }
    );
  }

  /**
   * Function to get all Institutes
   */
  async getAllInstitutes() {
    await this.dataService.getAllInstitutes().subscribe(
      (res: any) => {
        this.getInstitutes = res.Institute;
      },
      (error) => {
      }
    );
  }

  /**
   * Get all questions
   */
  async getAllQuestions() {
    await this.dataService.getAllQuestions().subscribe((res: any) => {
      this.questions = res.data;
    });
  }

  /**
   * Function to register user
   */
  async submitForm() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      let params = this.registerForm?.value;
      await this.authService.register(params).subscribe((res: any) => {
        this.notify.notificationService.openSuccessSnackBar(res?.message);
        this.router.navigate(['login']);
      }, error => {
        this.notify.notificationService.openFailureSnackBar(error);
      })
    }
  }
}
