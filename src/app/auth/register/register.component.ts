import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from './../../services/country.service';
import { DataService } from './../../services/data.service';

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
  submitted: boolean = false;
  siteKey = "6LcX9pEdAAAAAOKoswl3Wl3bV6sGBeuk7SdGRkQt"

  constructor(
    public fb: FormBuilder,
    public dataService: DataService,
    public countryService: CountryService
  ) { }

  async ngOnInit() {
    this.buildForm();
    this.loadCountries();
    this.getAllBatches();
    this.getAllInstitutes();
  }

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
      mobile_number: ['', Validators.required],
      birth_date: ['', Validators.required],
      personal_email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      current_company: ['', Validators.required],
      current_designation: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
      password_confirmation: ['', Validators.required, Validators.minLength(6)],
      securityQuestions_id: ['', Validators.required],
      security_answers: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  /**
   * Function to get all Countries
   */
  public loadCountries() {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
      console.log(data);
    });
  }

  public changeCountry(event: any) {
    console.log(event.target.value);
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
      let data = await this.dataService.register(params).toPromise();
      console.log(data, 'register Form')
    }
  }
}
