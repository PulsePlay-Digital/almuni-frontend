import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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

  constructor(
    public fb: FormBuilder,
    public countryService: CountryService,
    public dataService: DataService,
    public authService: AuthService,
    private config: Config
  ) {}

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
        mobile_number: [
          "",
          [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(10),
            Validators.maxLength(10),
          ],
        ],
        birth_date: ["", Validators.required],
        personal_email: [
          "",
          [
            Validators.required,
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
          ],
        ],
        current_company: ["", Validators.required],
        current_designation: ["", Validators.required],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(10),
          ],
        ],
        password_confirmation: ["", [Validators.required]],
        securityQuestions_id: ["", Validators.required],
        security_answers: ["", Validators.required],
        recaptcha: ["", Validators.required],
        role: [0],
      },
      {
        validators: this.passwordMatch("password", "password_confirmation"),
      }
    );
  }

  get f() {
    return this.registerForm.controls;
  }

  /**
   * Function to get all Countries
   */
  public loadCountries() {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
      console.log(data);
    });
  }

  /**
   * Function to change country code on click
   * @param event
   */
  public changeCountry(event: any) {
    this.registerForm.controls["code"].setValue(event.target.value);
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
   * Function to allow only Value
   */
  public keyPressNumbers(event: any) {
    this.config.onlyNumber(event);
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
   * Function to get all Institutes
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
    }

    if (this.registerForm.valid) {
      let params = this.registerForm.value;
      let data = await this.authService.register(params).toPromise();
    }
  }
}