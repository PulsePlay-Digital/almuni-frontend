import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../../services/auth.service';
import { CountryService } from './../../../services/country.service';
import { DataService } from './../../../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  countries: any;
  getBatch: any;
  getInstitutes: any;
  questions: any;
  submitted: boolean = false;
  siteKey = "6LcX9pEdAAAAAOKoswl3Wl3bV6sGBeuk7SdGRkQt";

  constructor(
    public fb: FormBuilder,
    public countryService: CountryService,
    public dataService: DataService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadCountries();
    this.getAllBatches();
    this.getAllInstitutes();
    this.getAllQuestions();
  }

    /**
   * Function to build form
   */
     buildForm() {
      this.registerForm = this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        institute_id: ['', Validators.required],
        batchYear_id: ['', Validators.required],
        city: ['', Validators.required],
        current_region: ['', Validators.required],
        country: ['', Validators.required],
        code: ['', Validators.required],
        mobile_number: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
        birth_date: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        current_company: ['', Validators.required],
        current_designation: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        password_confirmation: ['', [Validators.required]],
        securityQuestions_id: ['', Validators.required],
        security_answers: ['', Validators.required],
        recaptcha: ['', Validators.required],
        role: [1]
      },
        {
          validators: this.passwordMatch('password', 'password_confirmation')
        });
    }
  
    /**
     * Function to get all form control
     */
    get f() { return this.registerForm.controls; }
  
    /**
     * Function to match password with confirm password
     * @param passwordKey 
     * @param confirmPasswordKey 
     * @returns 
     */
    passwordMatch(passwordKey: string, confirmPasswordKey: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[passwordKey];
        const matchingControl = formGroup.controls[confirmPasswordKey];
        if (matchingControl.errors && !matchingControl.errors.MustMatch) {
          return
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ MustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
      }
    }
  
    /**
    * Function to get all Countries
    */
    public loadCountries() {
      this.countryService.getCountries().subscribe(data => {
        this.countries = data;
      });
    }
    /**
     * Function to set country code on change
     * @param event 
     */
    public changeCountry(event: any) {
      this.registerForm.controls['code'].setValue(event.target.value);
    }
  
    /**
   * Function to get all Batches 
   */
    async getAllBatches() {
      await this.dataService.getAllBatches().subscribe((res: any) => {
        this.getBatch = res.BatchYear;
      }, error => {
        console.log(error)
      });
    }
    /**
     * Function to get all Institutes
     */
    async getAllInstitutes() {
      await this.dataService.getAllInstitutes().subscribe((res: any) => {
        this.getInstitutes = res.Institute;
      }, error => {
        console.log(error)
      });
    }
  
    async getAllQuestions() {
      await this.dataService.getAllQuestions().subscribe((res: any) => {
        this.questions = res.data;
      })
    }
  
    /**
     * Function to register user
     */
    async submitForm() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      else {
        let data = await this.authService.register(this.registerForm.value).toPromise();
      }
    }
}
